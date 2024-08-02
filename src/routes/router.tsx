import { createHashRouter } from "react-router-dom";
import { LoginPage, TmLogin } from "../components/ExAllCo";



export const router = createHashRouter([
 {
  path: '/',
  element: <LoginPage />,
  children: [
   { index: true, element: <TmLogin /> }
  ]
 }
])