import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { sousCatService } from '../../_services';
import { useQuery } from '@tanstack/react-query';
import FormationContext from '../UseContext/formation.context';
import { useSousCat, useSuive } from '../UseContext/useForma';
import { BASE } from '../../_services/caller.service';

export default function NavCard() {
    let {slug} = useParams()
    console.log("sous_categorie",slug)
    const {user, } = useContext(FormationContext)
    const {addsuive} = useSuive()
    const {sous_categorie, isLoading } = useSousCat(slug)
    console.log("azerty",sous_categorie)
    
      if (isLoading) {
        return <div>Chargement...</div>;
      }
    
      const onSubmitCour = (e) => {
        e.preventDefault();
    
        const data = {
            
            souscategorie_id: slug,
            apprenant_id: user,
          };

          addsuive(data)
    
    };

    const publishedPosts = sous_categorie.formation.filter(post => post.publier === true);
    const nombre = publishedPosts?.length;
    

    let url = BASE(sous_categorie.image)

  return (
    <>
    <main>
    <div>
    {/* Bg cover */}
    <section className="py-8" style={{background: 'linear-gradient(270deg, #9d4eff 0%, #782af4 100%)'}} />
    {/* Page header */}
    <section className="bg-white shadow-sm">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="d-md-flex align-items-center justify-content-between bg-white pt-3 pb-3 pb-lg-5">
                <div className="d-md-flex align-items-center text-lg-start text-center">
                <div className="me-3 mt-n8">
                    <img src={url} className="avatar-xxl rounded border p-4 bg-white" alt="bootstarp " />
                </div>
                <div className="mt-3 mt-md-0">
                    <h1 className="mb-0 fw-bold me-3">{sous_categorie.nom}</h1>
                </div>
                <div>
                    {/* <span className="ms-2 fs-6">
                    <span className="text-dark fw-medium">21.9K</span>
                    students
                    </span> */}
                    <span className="ms-2 fs-6">
                    <span className="text-dark fw-medium">{nombre} </span>
                    formation
                    </span>
                    {/* <span className="ms-2 fs-6">
                    <span className="text-dark fw-medium">11</span>
                    Hours
                    </span> */}
                </div>
                </div>
                {/* Dropdown */}
                <div className="mt-3 mt-lg-0 text-lg-start text-center">
                <button onClick={onSubmitCour} className="btn-icon btn-light rounded-circle fe fe-bookmark fs-4 fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Bookmarked" />
                {/* <span className="dropdown">
                    <a className="btn-icon btn-light rounded-circle" href="#" role="button" id="shareDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fe fe-share-2 fs-4" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="shareDropdown">
                    <span className="dropdown-header">Share</span>
                    <a className="dropdown-item" href="#">
                        <span className="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-facebook text-secondary" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z ">
                            </path></svg>
                        </span>
                        <span>Facebook</span>
                    </a>
                    <a className="dropdown-item" href="#">
                        <span className="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-twitter text-secondary" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z ">
                            </path></svg>
                        </span>
                        <span>Twitter</span>
                    </a>
                    <a className="dropdown-item" href="#">
                        <span className="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-linkedin text-secondary" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z ">
                            </path></svg>
                        </span>
                        <span>Linked In</span>
                    </a>
                    <a className="dropdown-item" href="#">
                        <span className="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-copy text-secondary " viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z" />
                        </svg>
                        </span>
                        <span>Copy</span>
                        Link
                    </a>
                    </span>
                </span> */}
                </div>
            </div>
            
            </div>
        </div>
        </div>
    </section>
    </div>

    
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
                            {sous_categorie.formation?.map((post) => (<>
                               
                               {post.publier===true && <div className="col-lg-3 col-md-6 col-12">
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
                                
                                }
                                
                                </>))}                                   
                                
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
