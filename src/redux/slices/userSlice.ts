import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  phonNumber: string;

}

const initialState: UserState = {
  phonNumber: '',

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.phonNumber = action.payload.phonNumber;
    },
    clearUser(state) {
      state.phonNumber = '';

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
