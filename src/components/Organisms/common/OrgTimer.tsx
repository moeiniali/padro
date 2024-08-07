import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { tick, reset } from '../../../redux/slices/timerSlice';

const OrgTimer: React.FC = () => {
 const dispatch: AppDispatch = useDispatch();// Initialize dispatch for Redux actions
 const remainingTime = useSelector((state: RootState) => state.timer.remainingTime) || 60;// Retrieve remaining time from Redux store, defaulting to 60 seconds


 // Effect to start the timer and dispatch tick action every second
 useEffect(() => {
  if (remainingTime > 0) {
   const timer = setInterval(() => {
    dispatch(tick());
   }, 1000);

   return () => clearInterval(timer);// Cleanup the interval on component unmount
  }
 }, [remainingTime, dispatch]);
 // Handle reset action
 const handleReset = () => {
  dispatch(reset());
 };

 return (
  <div className='w-full h-auto flex items-center justify-center '>
   {remainingTime > 0 ? (
    <div className='w-full h-auto flex items-center justify-center flex-row text-sm font-normal text-[#7E838F]'>
     <p>زمان باقی‌مانده: {remainingTime} ثانیه</p>
    </div>
   ) : (
    <div className='w-full h-auto flex items-center justify-center flex-row gap-4'>
     <p>کد را دریافت نکردید؟</p>
     <button className='border-b border-blue-500 text-blue-500 font-medium text-sm animate-pulse' onClick={handleReset}> ارسال مجدد</button>
    </div>
   )}
  </div>
 );
};

export default OrgTimer;
