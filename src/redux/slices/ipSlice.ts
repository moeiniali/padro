import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDate } from '../../services/fetchApi';
import axios from 'axios';
import { ResponseTypes, AsyncThunkConfig } from '../types';
import { notifyError } from '../../utils/notify';
const baseUrl: string = 'https://geo.ipify.org/api/v2';

interface initialStateTypes {
  data?: ResponseTypes | null;
  loading: boolean;
  error: string | null;

}
const initialState: initialStateTypes = {
  data: null,
  loading: false,
  error: null
};






let requestCount = 0;
const maxRequests = 5;
const resetInterval = 60000;

const resetRequestCount = () => {
  requestCount = 0;
  setTimeout(resetRequestCount, resetInterval);
};

resetRequestCount();

export const throttledFetchIpData = async (ipAddress: string) => {
  if (requestCount >= maxRequests) {
    notifyError(' شما فقط مجاز به ارسال 5 درخواست در یک دقیقه میباشید');
    return;
  }

  requestCount++;

  try {
    const response = await axios.get(`${baseUrl}/country,city?apiKey=at_shMU15WDimBYNwXfjkuxX1MAlMxFG&ipAddress=${ipAddress}`);
    return response;
  } catch (error) {
    console.error('خطا در دریافت اطلاعات', error);
  }
};


export const fetchIpAddress = createAsyncThunk<ResponseTypes, string, AsyncThunkConfig>(
  'fetchIpAddress',
  async (ipAddress, thunkAPI) => {
    try {
      const response = await throttledFetchIpData(ipAddress)
      return response?.data as ResponseTypes;
    } catch (error) {
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ');
    }
  },
)


const IpSlices = createSlice({
  name: 'IpSlices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIpAddress.pending, (state) => {
      state.loading = true;
      state.error = null;


    })
      .addCase(fetchIpAddress.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchIpAddress.rejected, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload || 'خطای سرور';

      })
  }
})



export default IpSlices.reducer;
