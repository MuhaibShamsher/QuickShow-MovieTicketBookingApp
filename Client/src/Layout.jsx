import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function Layout() {
    const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster />
      {!isAdminRoute && <NavBar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  )
}
 
export default Layout