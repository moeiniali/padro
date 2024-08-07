import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the user's state
interface UserState {
  phonNumber: string;

}
// Initial state for the user
const initialState: UserState = {
  phonNumber: '',

};

// Create a slice for the user
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user's phone number
    setUser(state, action: PayloadAction<UserState>) {
      state.phonNumber = action.payload.phonNumber;
    },
    // Action to clear the user's phone number
    clearUser(state) {
      state.phonNumber = '';

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
