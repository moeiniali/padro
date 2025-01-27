import React from 'react'
import { OrgForm } from '../ExAllCo';
import { Toaster } from 'react-hot-toast';
type Props = {}

const TmLogin = (props: Props) => {
 return (
  <div className='w-full h-screen bg-white flex justify-center items-center'>
   <Toaster />
   <OrgForm />
  </div>
 )
}

export default TmLogin;