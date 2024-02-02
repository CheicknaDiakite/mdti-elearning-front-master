import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import Layout from './Layout';
import Index from './Accueil';
import FormationDetail from '../Instructeur/Formation/FormationDetail';
import { accountService } from '../../_services';
import QcmDetail from '../Instructeur/Qcm/QcmDetail';
import VideoVue from './VueVideo/VideoVue';
import Editor from '../../components/Editor';
import Vid from '../../components/VideoApp';
import VideoApp from '../../components/VideoApp';
export default function PublicRoute() {

  const user = accountService.getToken()

  return (
    
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Index />} />

          <Route path='formation'>
            <Route path='detail/:slug' element={<FormationDetail user={user} />} />
            <Route path='vue-video/:slug' element={<VideoVue user={user} />} />
            <Route path='test' element={<VideoApp />} />
          </Route>            

          <Route path='*' element={<Error/> }/>
        </Route>
    </Routes>
    
  );
}
