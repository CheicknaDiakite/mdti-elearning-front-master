import React, { useEffect, useState } from 'react'
import { formationService } from '../../_services';
import Slider from '../../components/Public/Slider';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import AcceuilCard from './AcceuilCard';

export default function Accueil() {

    
    const [formations, setFormations] = useState([]);
    
    const {
      // data: categorie,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["formations"],
      queryFn: () =>
        formationService.tousFormation()
        .then((res) => {
          setFormations(res.data.donnee);
        }),
      onerror: (error) => console.log(error),
    });
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    
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
                                <a className="nav-link active" id="bookmarked-tab" data-bs-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true">Formation</a>
                            </li>
                            
                        </ul>
                        {/* <!-- Tab content --> */}
                        <div className="tab-content" id="tabContent">
                            <div className="tab-pane fade show active" id="bookmarked" role="tabpanel" aria-labelledby="bookmarked-tab">
                                <div className="row">
                                {formations?.map((post) => (
                                    post.publier===true ? <>
                                        <AcceuilCard post={post} />
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
