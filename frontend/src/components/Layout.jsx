import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div>
      <ToastContainer position="bottom-left"/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout