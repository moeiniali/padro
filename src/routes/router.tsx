import { createHashRouter } from "react-router-dom";
import { LoginPage, TmLogin, OtpPage, TmOtp, IpAddressPage, TmIpLocation } from "../components/ExAllCo";



export const router = createHashRouter([
 {
  path: '/',
  element: <LoginPage />,
  children: [
   { index: true, element: <TmLogin /> }
  ]
 },
 {
  path: '/otp',
  element: <OtpPage />,
  children: [
   { index: true, element: <TmOtp /> }
  ]
 },
 {
  path: '/IpLocation',
  element: <IpAddressPage />,
  children: [
   { index: true, element: <TmIpLocation /> }
  ]
 }
])