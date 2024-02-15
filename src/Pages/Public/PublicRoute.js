import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import Layout from './Layout';
import Accueil from './Accueil';
import FormationDetail from '../Instructeur/Formation/FormationDetail';

import VideoVue from './VueVideo/VideoVue';

import VideoApp from '../../components/VideoApp';
import NavCard from '../../components/Public/NavCard';

export default function PublicRoute() {

  return (
    
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Accueil />} />

          <Route path='formation'>
            <Route path='detail/:slug' element={<FormationDetail />} />
            <Route path='categorie/:id' element={<NavCard />} />
            <Route path='vue-video/:slug' element={<VideoVue />} />
            <Route path='test' element={<VideoApp />} />
          </Route>            

          <Route path='*' element={<Error/> }/>
        </Route>
    </Routes>
    
  );
}
