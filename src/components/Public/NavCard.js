import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { sousCatService } from '../../_services';
import { useQuery } from '@tanstack/react-query';

export default function NavCard() {
    let {id} = useParams()
    // const sl = {
    //     "id":id
    // }
    // console.log(sl)
    // console.log("id .. ",id)
    const {
        data: sousCategorie,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["sousCategories", id],
        queryFn: () =>
          sousCatService.unSousCat(id)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const sous_categorie = sousCategorie.donnee
    console.log("forma sous ...",sous_categorie)

  return (
    <>
    <main>
    
    {/* <!-- Content --> */}
    <section className="pb-5 py-md-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <!-- Side Navbar --> */}
                    <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                        <li className="nav-item ms-0" role="presentation">
                            <a className="nav-link active" id="bookmarked-tab" data-bs-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true">{sous_categorie.nom}</a>
                        </li>
                        
                    </ul>
                    {/* <!-- Tab content --> */}
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active" id="bookmarked" role="tabpanel" aria-labelledby="bookmarked-tab">
                            <div className="row">
                            {sous_categorie.formation?.map((post) => (
                                
                                <div className="col-lg-3 col-md-6 col-12">
                                {/* <!-- Card --> */}
                                <div className="card mb-4 card-hover">
                                    <Link to={`/formation/detail/${post.slug}`}><img src={`http://127.0.0.1:8000/${post.miniature}`} alt="course" className="card-img-top"/></Link>
                                    {/* <!-- Card body --> */}
                                    <div className="card-body">
                                        <h3 className="h4 mb-2 text-truncate-line-2"><a href="#" className="text-inherit">{post.nom}</a></h3>
                                        {/* <!-- List inline --> */}
                                        <ul className="mb-3 list-inline">
                                            <li className="list-inline-item">
                                                <span className="align-middle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                    </svg>
                                                </span>
                                                <span>{post.nombre_heur}</span>
                                            </li>
                                            
                                        </ul>
                                        <div className="mt-3 d-flex align-baseline lh-1">
                                            
                                            <span className="text-warning mx-1">Publier le</span>
                                            <span className="fs-6">{post.date}</span>
                                        </div>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    <div className="card-footer">
                                        <div className="row align-items-center g-0">
                                            <div className="col-auto">
                                                <img src={`http://127.0.0.1:8000/${post.instructeur_avatar}`} className="rounded-circle avatar-xs" alt="avatar"/>
                                            </div>
                                            <div className="col ms-2">
                                                <span>{post.instructeur_last_name} {post.instructeur_first_name}</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>                                  
                                
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
