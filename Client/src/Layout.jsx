import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function Layout() {
    const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
       {!isAdminRoute && <NavBar />}
       <Outlet />
       {!isAdminRoute && <Footer />}
    </>
  )
}
 
export default Layout