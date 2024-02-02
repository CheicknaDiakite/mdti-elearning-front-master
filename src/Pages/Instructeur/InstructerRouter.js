import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dash from '../Public/Dash';
import Dashboard from '../Public/Dashboard';
import Error from '../../_utils/Error';
import FormationList from './Formation/FormationList';
import { accountService } from '../../_services';

import SousCate from '../Admin/Sous-Categorie/SousCate';
import Categorie from '../Admin/Categorie/Categorie';
import FormQcmChapit from './Formation/FormQcmChapit';
import Discut from './Formation_Cours/Discut';
import Question from './Question/Question';
import FormationEdit from './Formation/FormationEdit';
import UserProfil from './UserProfil';
import Userlist from './UserList';
import Reponse from './Question/Reponse';
import QcmDetail from './Qcm/QcmDetail';
import Videos from './Video/Video';
import SeanceTravail from './SeanceTravail/SeanceTravail';

export default function InstructerRouter() {
  const user = accountService.getToken()
  return (
    <>
    <Routes>
        <Route element={<Dash/> }>
            <Route index element={<Dashboard/>}/>
            {/* <Route path='dashboard' element={<Dashboard />}/> */}

            <Route path='formation'>
              <Route index element={<FormationList user={user} />}/>
              
              <Route path='chapitre-qcm/:slug' element={<FormQcmChapit user={user}/>} />
              <Route path='video/:id' element={<Videos user={user}/>} />
              <Route path='question/:id' element={<Question />} />
              <Route path='reponse/:id' element={<Reponse />} />
              <Route path='discution/:id/:slug' element={<Discut user={user} />} />
              <Route path='modif/:slug' element={<FormationEdit />} />
              <Route path='qcm/detail/:slug' element={<QcmDetail user={user} />} />
              <Route path='seanceTravail/:slug' element={<SeanceTravail user={user} />} />
            </Route>
            <Route path='user'>
              <Route path='profil' element={<UserProfil user={user}/>} />
              <Route path='index' element={<Userlist/>} />

            </Route>

            <Route path='*' element={<Error/>} />
        </Route>
    </Routes>
    </>
  )
}
