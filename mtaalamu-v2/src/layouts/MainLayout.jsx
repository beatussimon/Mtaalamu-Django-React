import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout