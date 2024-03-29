import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import Layout from './Layout';
import Accueil from './Accueil';
import FormationDetail from '../Instructeur/Formation/FormationDetail';

import VideoVue from './VueVideo/VideoVue';

import VideoApp from '../../components/VideoApp';
import NavCard from '../../components/Public/NavCard';
import Categorie from './Categorie/Categorie';
import MesExamen from '../Apprenant/MesExamen/MesExamen';
import ListDocument from '../Admin/Ancien_Sujet/Document/ListDocument';
import Detail from '../Admin/Ancien_Sujet/Document/Detail';


export default function PublicRoute() {

  return (
    
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Accueil />} />

          <Route path='formation'>
            
            <Route path='categorie' element={<Categorie />} />
            <Route path='ancien-sujet' element={<ListDocument />} />
            <Route path='ancien-sujet/:id' element={<Detail />} />
            <Route path='detail/:slug' element={<FormationDetail />} />
            <Route path='categorie/:slug' element={<NavCard />} />
            <Route path='vue-video/:slug' element={<VideoVue />} />
            <Route path='test' element={<VideoApp />} />
          </Route>

          {/* <Route path='apprenant'>
            <Route path='detail/:slug' element={<FormationDetail />} />
            <Route path='categorie/:id' element={<NavCard />} />
            <Route path='vue-video/:slug' element={<VideoVue />} />
            <Route path='test' element={<VideoApp />} />
          </Route>             */}

          <Route path='*' element={<Error/> }/>
        </Route>
    </Routes>
    
  );
}
