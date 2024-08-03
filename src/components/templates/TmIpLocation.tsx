import React from 'react'
import { Toaster } from 'react-hot-toast'
import { OrgIpAddress } from '../ExAllCo'



type Props = {}

const TmIpLocation = (props: Props) => {
 return (
  <div className='w-full h-screen bg-white flex justify-center items-center'>
   <Toaster />
   <OrgIpAddress />
  </div>
 )
}

export default TmIpLocation