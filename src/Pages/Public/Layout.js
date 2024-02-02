import React from 'react'
import { Outlet } from 'react-router-dom'

import { accountService } from '../../_services'
import Navbar from '../../components/Public/Navbar'
import Footer from '../../components/Public/Footer'

export default function Layout() {
  const user = accountService.getToken()
  return (
    <div>
        <Navbar user={user} />
        
        <Outlet/>

        <Footer/>  
    </div>
  )
}
