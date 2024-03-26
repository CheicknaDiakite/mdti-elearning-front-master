import React, { useState } from 'react'

import Slider from '../../components/Public/Slider';
import AcceuilCard from './AcceuilCard';
import useForma from '../../components/UseContext/useForma';

export default function Accueil() {

    const {formations, isLoad} = useForma()    
    
    const [formas, setFormations] = useState(formations);
    
    if (isLoad) {
       return <div>Chargement...</div>;
    }

    const filterType = (nom) => {
        setFormations(
            formas.filter((item) => {
               return item.nom === nom;
            })
        );
    
      };
    
      // fin
    
  return (
    <>
    {/* Navbar */}
    {/* <Navbar /> */}

    {/*<-- Page Content <--*/}
    <Slider />

        {/* <!-- Page Content --> */}
        <main>
    
        {/* <!-- Content --> */}
        <section className="pb-5 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!-- Side Navbar --> */}
                        <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                            <li className="nav-item ms-0" role="presentation">
                                <a onClick={() => setFormations(formations)} className="nav-link active" id="bookmarked-tab" data-bs-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true">Formation</a>
                            </li>
                            <li className="nav-item ms-0" role="presentation">
                                <a onClick={() => filterType('Manga')} className="nav-link" id="bookmarked-tab" data-bs-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true"></a>
                            </li>
                            
                            
                        </ul>
                        {/* <!-- Tab content --> */}
                        <div className="tab-content" id="tabContent">
                            <div className="tab-pane fade show active" id="bookmarked" role="tabpanel" aria-labelledby="bookmarked-tab">
                                <div className="row">
                                {formas?.map((post, index) => (
                                    post.publier===true ? <>
                                        <AcceuilCard key={index} post={post} />
                                    </> : ''
                                    
                                ))}                                   
                                    
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    
    </>
  )
}
