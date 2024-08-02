import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LoginPage: React.FC = (props: Props) => {
 return (
  <Outlet />
 )
}

export default LoginPage