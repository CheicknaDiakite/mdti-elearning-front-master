import React from 'react'
import { Outlet } from 'react-router-dom'
import { accountService } from '../../_services'
import AdminSideMenu from '../../components/Public/Admin/AdminSideMenu'
import AdminHeader from '../../components/Public/Admin/AdminHeader'


export default function ALayout() {
  const user = accountService.getToken()
  console.log(user)
  return (
    <div>
      <AdminSideMenu/>
      <div id="db-wrapper">
        {/* Page Content */}
        <main id="page-content">
          <AdminHeader passId={user}/>
          {/* Page Header */}
          {/* Container fluid */}
          <Outlet/> 
        </main>

      </div>
       
    </div>
  )
}
