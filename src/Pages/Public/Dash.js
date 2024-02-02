import React from 'react'
import { accountService } from '../../_services'
import SideMenu from '../../components/Public/Instruct/SideMenu'
import Header from '../../components/Public/Instruct/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Public/Navbar'

export default function Dash() {
  const user = accountService.getToken()
  return (
    <>
      <Navbar user={user}/>
      {/* Page Content */}
      <main>
      <section className="pt-5 pb-5">
          <div className="container">
          {/* User info TestHead */}
          <Header user={user}/>
          {/* Content */}
          <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                  {/* Side navbar TestSide */}
                  <SideMenu user={user} />
              </div>
              {/* Outlet Les composent variables */}
              <div className="col-lg-9 col-md-8 col-12">
                  {/* Card TesFormation */}
                  <Outlet/> 
              </div>

          </div>
          </div>
      </section>
      </main>
       
    </>
  )
}
