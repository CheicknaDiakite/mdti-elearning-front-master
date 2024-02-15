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
import Slider from './Slider/Slider';
import Type from './Ancien_Sujet/Type/Type';
import Niveau from './Ancien_Sujet/Niveau/Niveau';
import CateModif from './Categorie/CateModif';
import SousModif from './Sous-Categorie/SousModif';
import CateContext from './Categorie/CateContext';

export default function AdminRouter() {
  
  return (
    <>
    <Routes>
      <Route element={<ALayout/> }>
        <Route index element={<AdminDash/>}/>
        <Route path='dashboard' element={<AdminDash />}/>

        <Route path='formation'>
          <Route path='index' element={<Formation />} />
          <Route path='slider' element={<Slider />} />
          <Route path='edit/:slug' element={<FormaEdit />} />
          <Route path='categorie' element={<CateContext />}/>
          <Route path='categorie/:id' element={<CateModif />}/>
          <Route path='sous-categorie/:slug' element={<SousCate />} />
          <Route path='sous/modif/:id' element={<SousModif />} />
        </Route>

        <Route path='ancien_sujet'>
          <Route path='type' element={<Type />} />
          <Route path='niveau' element={<Niveau />} />
        </Route>

        <Route path='user'>
          <Route path='index' element={<Userlist/>} />
          <Route path='profil' element={<UserProfil />} />
        </Route>


        <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
    </>
  )
}
