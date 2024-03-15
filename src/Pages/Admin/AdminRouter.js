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
import ModifContext from './Categorie/ModifContext';
import TypeModif from './Ancien_Sujet/Type/TypeModif';
import Matiere from './Ancien_Sujet/Matiere/Matiere';

import Discut from '../Instructeur/Formation_Cours/Discut';
import AdForQcmChap from './AdmFormat/AdForQcmChap';
import Fiche from './Fichier/Fiche';

import AExamen from './AdmExamen/AExamen';
import AListExa from './AdmExamen/AListExa';

export default function AdminRouter() {
  
  return (
    <>
    <Routes>
      <Route element={<ALayout/> }>
        <Route index element={<AdminDash/>}/>
        <Route path='dashboard' element={<AdminDash />}/>

        <Route path='formation'>
          <Route path='index' element={<Formation />} />
          <Route path='examen' element={<AExamen />} />
          <Route path='slider' element={<Slider />} />
          <Route path='chapitre-qcm/:slug' element={<AdForQcmChap />} />
          <Route path='edit/:slug' element={<FormaEdit />} />
          <Route path='categorie' element={<CateContext />}/>
          <Route path='categorie/:id' element={<ModifContext />}/>
          <Route path='sous-categorie/:slug' element={<SousCate />} />
          <Route path='sous/modif/:id' element={<SousModif />} />
          <Route path='discution/:id/:slug' element={<Discut />} />
          <Route path='examen/code/:a_id/:e_id' element={<AListExa />} />
        </Route>

        <Route path='ancien_sujet'>
          <Route path='type' element={<Type />} />
          <Route path='type/:id' element={<TypeModif />} />
          <Route path='niveau' element={<Niveau />} />
          <Route path='niveau/:id' element={<Niveau />} />
          <Route path='matiere' element={<Matiere />} />
          <Route path='matiere/:id' element={<Niveau />} />
        </Route>

        <Route path='user'>
          <Route path='index' element={<Userlist/>} />
          <Route path='profil' element={<UserProfil />} />
          <Route path='profil/:id' element={<Fiche />} />
        </Route>


        <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
    </>
  )
}
