import React, { useContext, useState } from 'react'

import Slider from '../../components/Public/Slider';

import AcceuilCard from './AcceuilCard';
import FormationContext from '../../components/UseContext/formation.context';

export default function Accueil() {
    const { formations } = useContext(FormationContext)
    
    const [formas, setFormations] = useState(formations);
    
    
    const filterType = (nom) => {
        setFormations(
            formas.filter((item) => {
                return item.nom === nom;
              })
        );
    
      };
    
      // fin
    const styles = {
        container: {
            height: '5px',
        },
        container_1: {
            width: '75%',
        },
        container_2: {
            height: '300px',
        },
        container_3: {
            background: 'url(../assets/images/background/profile-bg.jpg) no-repeat; background-size: cover; height: 100px',
        },
        
        container_5: {
            width: '45%',
        },
        
        container_7: {
            width: '95%',
        },
        
        container_9: {
            width: '65%',
        },

        // ... d'autres objets de style
      };
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
