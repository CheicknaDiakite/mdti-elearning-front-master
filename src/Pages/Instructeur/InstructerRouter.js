import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dash from '../Public/Dash';
import Dashboard from '../Public/Dashboard';
import Error from '../../_utils/Error';
import FormationList from './Formation/FormationList';

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
import ChapitreModif from './Chapitre/ChapitreModif';
import AutreQCM from './Qcm/Autre/AutreQCM';
import Cour from '../Apprenant/Cour';
import MesCategorie from '../Apprenant/MesCategorie/MesCategorie';
import Examen from './Examen/Examen';
import ListExamen from './Examen/ListExamen';

export default function InstructerRouter() {
  
  return (
    <>
    <Routes>
        <Route element={<Dash/> }>
            <Route index element={<Dashboard/>}/>
            {/* <Route path='dashboard' element={<Dashboard />}/> */}

            <Route path='formation'>
              <Route index element={<FormationList />}/>
              
              <Route path='examen' element={<Examen />} />
              <Route path='chapitre-qcm/:slug' element={<FormQcmChapit />} />
              <Route path='chapitre/modif/:id' element={<ChapitreModif />} />
              <Route path='video/:id' element={<Videos />} />
              <Route path='question/:id' element={<Question />} />
              <Route path='reponse/:id' element={<Reponse />} />
              <Route path='modif/:slug' element={<FormationEdit />} />
              <Route path='qcm/detail/:id' element={<AutreQCM />} />
              {/* // QcmDetail */}
              <Route path='discution/:id/:slug' element={<Discut />} />
              <Route path='examen/code/:a_id/:e_id' element={<ListExamen />} />
              <Route path='seanceTravail/:id/:slug' element={<SeanceTravail />} />
            </Route>

            <Route path='apprenant'>
              <Route path='cour' element={<Cour />} />
              <Route path='categorie' element={<MesCategorie />} />
              <Route path='index' element={<Userlist />} />
            </Route>

            <Route path='user'>
              <Route path='profil' element={<UserProfil />} />
              <Route path='index' element={<Userlist />} />

            </Route>

            <Route path='*' element={<Error/>} />
        </Route>
    </Routes>
    </>
  )
}
