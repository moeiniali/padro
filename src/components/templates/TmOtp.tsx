import React from 'react'
import { OrgOtp } from '../ExAllCo';
import { Toaster } from 'react-hot-toast';



type Props = {}

const TmOtp = (props: Props) => {
 return (
  <div className='w-full h-screen bg-white flex justify-center items-center'>
   <Toaster />
   <OrgOtp />
  </div>

 )
}

export default TmOtp