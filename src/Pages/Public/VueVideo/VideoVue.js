import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { accountService } from '../../../_services';
import toast from 'react-hot-toast';

import { Base } from '../../../_services/caller.service';
import FormationContext from '../../../components/UseContext/formation.context';
import useForma, { useChapitre } from '../../../components/UseContext/useForma';

export default function VideoVue() {
  let {slug} = useParams()
  const { user } = useContext(FormationContext)
  const sluger = {
    "formation_slug": slug
  }
  const {chapitre: chapitres} = useChapitre(sluger)
  const {formation: cour} = useForma(slug)
  
    // let url = "";
    // let Introduction = "Introduction";
    const [post, setPost] = useState([]);
    
    const [url, seturl] = useState('');

    // pour annuler le click droit
    useEffect(() => {
      const handleContextMenu = (e) => {
        e.preventDefault();
      };
  
      document.addEventListener('contextmenu', handleContextMenu, false);
  
      return () => {
        // Nettoyer l'écouteur d'événements lors du démontage du composant
        document.removeEventListener('contextmenu', handleContextMenu, false);
      };
    }, []);
    // fin

    const flag = useRef(false)
    useEffect(()=>{
  
      if(flag.current===false){
        accountService.getUser(user)
      .then(res => {
          if(res.data.etat===true){
              
              setPost(res.data.donnee);
              toast.success("Detail de la formation");
          } else {
              toast.error("Les identifiants sont incorrects");
          }
      })
      .catch(error => 
          toast.error("Erreur connexion")
          )
      }
  
      return () => flag.current = true;;;
  
    },[]);
    
    
  return (
    <>
    <main>
      <section className="mt-6 course-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Tab content */}
              <div className="tab-content content" id="course-tabContent">
                <div className="tab-pane fade show active" id="course-intro" role="tabpanel" aria-labelledby="course-intro-tab">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h3 className="mb-0 text-truncate-line-2">Introduction</h3>
                    </div>
                    <div>
                      {/* Dropdown */}
                      <span className="dropdown">
                        <a href="#" className="ms-2" id="dropdownInfo" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fe fe-help-circle" />
                        </a>
                        <span className="dropdown-menu dropdown-menu-lg p-3 dropdown-menu-end" aria-labelledby="dropdownInfo">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. cupiditate consequatur rerum eius ad ut officiis
                        </span>
                      </span>
                      {/* Dropdown */}
                      <span className="dropdown">
                        <a className=" " href="#" role="button" id="shareDropdown2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fe fe-more-vertical" />
                        </a>
                        <span className="dropdown-menu dropdown-menu-end" aria-labelledby="shareDropdown2">
                          <span className="dropdown-header">Share</span>
                          <a className="dropdown-item" href="#">
                            <span className="me-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-facebook text-secondary" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                </path></svg>
                            </span>
                            <span>Facebook</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <span className="me-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-twitter text-secondary" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                </path></svg>
                            </span>
                            <span>Twitter</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <span className="me-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-linkedin text-secondary" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                </path></svg>
                            </span>
                            <span>Linked</span>
                            In
                          </a>
                          <a className="dropdown-item" href="#">
                            <span className="me-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z" />
                              </svg>
                            </span>
                            <span>Copy</span>
                            Link
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* Video */}
                  <div id="video_container" className="embed-responsive position-relative w-100 d-block overflow-hidden p-0" style={{height: 600}}>
                    {/* <iframe className="position-absolute top-0 end-0 start-0 end-0 bottom-0 h-100 w-100" width={560} height={315} src={url} title="Geeks - Academy and LMS Template" frameBorder={0} /> */}

                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Card */}
      <section className="card course-sidebar" id="courseAccordion">
        {/* List group */}
        <ul className="list-group list-group-flush" style={{height: 850}} data-simplebar>
          <li className="list-group-item">
            <h4 className="mb-0">{cour.nom}</h4>
          </li>
          {/* List group item */}
          <li className="list-group-item">
          {chapitres?.length > 0 ? 
              chapitres.map((post)=> (
              <>
                  {/* Toggle */}
              <Link to={`#${post.id}`} className="d-flex align-items-center h4 mb-0" data-bs-toggle="collapse"  role="button" aria-expanded="true" aria-controls={post.id}>
                  <div className="me-auto">{post.nom}</div>
                  {/* Chevron */}
                  <span className="chevron-arrow ms-4">
                  <i className="fe fe-chevron-down fs-4" />
                  </span>
              </Link>
              {/* Row */}
              {/* Collapse */}
              <div className="collapse show" id={post.id} data-bs-parent="#courseAccordion">
                  <div className="py-4 nav" id="course-tabOne" role="tablist" aria-orientation="vertical" style={{display: 'inherit'}}>
                  {post.video?.map((post)=> (
                  <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-development-tab" data-bs-toggle="pill" href="#course-development" role="tab" aria-controls="course-development" aria-selected="false">
                      <div className="text-truncate">
                      <span onClick={()=>{
                        // url = "http://127.0.0.1:8000" + post.video_url;

                  // <video title="Wildlife" preload="auto" autoplay controls>
                  //   <source src="http://127.0.0.1:8000/media/VID_20231221_164830_zo8Ftsp.mp4" type="video/ogg"/>
                  //   <p>Wildlife</p>
                  //   </video>

                        seturl(
                          '<video title="Wildlife" preload="auto" autoplay controls>'
                        )
                        // alert(url)
                        let url = Base.baseURL + post.video_url;
                        document.querySelector('#video_container').innerHTML = `<video title="Wildlife" preload="auto" autoplay controls>
                        <source src=${url} type="video/ogg"/>
                        <p>Wildlife</p>
                        </video>
                        `;
                        // document.addEventListener('contextmenu', event => event.preventDefault());
                      }} className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                      <span>{post.nom}</span>
                      </div>
                      <div className="text-truncate">
                      <span>{post.nombre_heur}</span>
                      </div>
                  </a>
                  ))}
                  {/* <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-development-tab" data-bs-toggle="pill" href="#course-development" role="tab" aria-controls="course-development" aria-selected="false">
                      <div className="text-truncate">
                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                      <span>Installing Development Software</span>
                      </div>
                      <div className="text-truncate">
                      <span>3m 11s</span>
                      </div>
                  </a>
                  <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-project-tab" data-bs-toggle="pill" href="#course-project" role="tab" aria-controls="course-project" aria-selected="false">
                      <div className="text-truncate">
                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                      <span>Hello World Project from GitHub</span>
                      </div>
                      <div className="text-truncate">
                      <span>2m 33s</span>
                      </div>
                  </a>
                  <a className="d-flex justify-content-between align-items-center text-inherit" id="course-website-tab" data-bs-toggle="pill" href="#course-website" role="tab" aria-controls="course-website" aria-selected="false">
                      <div className="text-truncate">
                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                      <span>Our Sample Website</span>
                      </div>
                      <div className="text-truncate">
                      <span>2m 15s</span>
                      </div>
                  </a> */}
                  </div>
              </div>
              </>
          ))
          : 'Pas de chapitre'
          }
          </li>
          
        </ul>
      </section>
    </main>

    </>
  )
}
