import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import ALayout from './ALayout';
import AdminDash from '../../components/Public/Admin/AdminDash';
import FormationList from '../Instructeur/Formation/FormationList';
import { accountService } from '../../_services';
import Formation from './AdmFormat/Formation';
import FormaEdit from './AdmFormat/FormaEdit';
import Userlist from '../Instructeur/UserList';
import Categorie from './Categorie/Categorie';
import SousCate from './Sous-Categorie/SousCate';
import UserProfil from '../Instructeur/UserProfil';

export default function AdminRouter() {
  const user = accountService.getToken()
  return (
    <>
    <Routes>
      <Route element={<ALayout/> }>
        <Route index element={<AdminDash/>}/>
        <Route path='dashboard' element={<AdminDash />}/>

        <Route path='formation'>
          <Route path='index' element={<Formation user={user}/>} />
          <Route path='edit/:slug' element={<FormaEdit user={user} />} />
          <Route path='categorie' element={<Categorie user={user} />}/>
          <Route path='sous-categorie/:slug' element={<SousCate user={user} />} />
        </Route>

        <Route path='user'>
          <Route path='index' element={<Userlist/>} />
          <Route path='profil' element={<UserProfil user={user}/>} />


        </Route>


        <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
    </>
  )
}
