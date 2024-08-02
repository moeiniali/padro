import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import axios from "axios";
import { DomainData, CloudData, IpData } from "../../components/types";

const BaseUrl = 'https://run.mocky.io/v3'

interface CardSlice {
  loading: boolean
  domainData: DomainData
  cloudData: CloudData
  IpData: IpData
  data: any | null
}

const initialState: CardSlice = {
  loading: false,
  data: [],
  domainData: {
    ips: 0,
    live: [],
    monitored: [],
    ports: 0,
    total: 0,
    total_live: 0,
    total_monitored: 0,
    vulns: 0,
  },
  IpData: {
    ips: 0,
    live: [],
    monitored: [],
    ports: 0,
    total: 0,
    total_live: 0,
    total_monitored: 0,
    vulns: 0,
  },
  cloudData: {
    ips: 0,
    live: [],
    monitored: [],
    ports: 0,
    total: 0,
    total_live: 0,
    total_monitored: 0,
    vulns: 0,
  },



}

export const fetchData = createAsyncThunk('fetchData', async () => {
  try {

    const response = await axios.get(`${BaseUrl}/72e7e252-2f2b-462c-8e60-30a8a0cac801`)
    return response.data


  } catch (err) {
    console.log(err);

  }


})


const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        console.log('pending', action);
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log('fulfilled', action);
        state.loading = false;
        console.log(action?.payload.domain);

        state.data = action?.payload
        state.domainData = action?.payload.domain;
        state.IpData = action?.payload.ip;
        state.cloudData = action?.payload.cloud;

      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        console.log('rejected', action);

      })
  },
});


export default cardSlice.reducer;