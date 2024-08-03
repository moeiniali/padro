import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
 duration: number;
 remainingTime: number;
}

const initialState: TimerState = {
 duration: 60,
 remainingTime: 60,
};

const timerSlice = createSlice({
 name: 'timer',
 initialState,
 reducers: {
  setDuration(state, action: PayloadAction<number>) {
   state.duration = action.payload;
   state.remainingTime = action.payload;
  },
  tick(state) {
   state.remainingTime -= 1;
  },
  reset(state) {
   state.remainingTime = state.duration;
  },
 },
});

export const { setDuration, tick, reset } = timerSlice.actions;
export default timerSlice.reducer;
