import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'
import { accountService } from '../../_services'

export default function Navbar({user}) {

  let navigate = useNavigate()
  const logout = () => {
    accountService.logout()
    toast.success("Déconneter");
    navigate('/')
  }
  const login = () => {
    
    navigate('/auth/login')
  }
  const connect = accountService.isLogged()
  const [post, setPost] = useState([]);
  const flag = useRef(false)
  useEffect(()=>{

    if(flag.current===false){
      accountService.getUser(user)
    .then(res => {
        if(res.data.etat===true){            
            setPost(res.data.donnee);
        } else {
            toast.error("Les identifiants sont incorrects");
        }
    })
    .catch(error => 
        console.log()
        )
    }

    return () => flag.current = true;;;

  },[]);
  // fin
  return (
    <>
    
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="/"><img src="./assets/images/brand/logo/logo.svg" alt="Geeks" /></a>
        {/* Mobile view nav wrap */}
        <div className="ms-auto d-flex align-items-center order-lg-3">
          <div className="dropdown">
            <button className="btn btn-light btn-icon rounded-circle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
              <i className="bi theme-icon-active" />
              <span className="visually-hidden bs-theme-text">Toggle theme</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
              <li>
                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                  <i className="bi theme-icon bi-sun-fill" />
                  <span className="ms-2">Light</span>
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                  <i className="bi theme-icon bi-moon-stars-fill" />
                  <span className="ms-2">Dark</span>
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                  <i className="bi theme-icon bi-circle-half" />
                  <span className="ms-2">Auto</span>
                </button>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-right-wrap ms-2 flex-row d-none d-md-block">
            
            <li className="dropdown ms-2 d-inline-block position-static">
              <a className="rounded-circle" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <div className="avatar avatar-md avatar-indicators avatar-online">
                {connect ? <>
                  <img alt="avatar" src={`http://127.0.0.1:8000/${post.avatar}`} className="rounded-circle" />
                </> 
                :
                <>
                  <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                </>}
                  
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end position-absolute mx-3 my-5">
                <div className="dropdown-item">
                  <div className="d-flex">
                  {connect ? <>
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">{post.last_name} {post.first_name}</h5>
                      <p className="mb-0">{post.email}</p>
                    </div>
                  </> 
                  
                  : 'nom'}
                    

                  </div>
                </div>
                <div className="dropdown-divider" />
                <ul className="list-unstyled">
                  <li className="dropdown-submenu dropstart-lg">
                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="/admin">
                      <i className="fe fe-circle me-2" />
                      Connexion
                    </a>
                    
                  </li>
                  {post.type_compte==='admin' && <li>
                    <a className="dropdown-item" href="/admin/user/profil">
                      <i className="fe fe-user me-2" />
                      Profile
                    </a>
                  </li>}
                  {post.type_compte==='instructeur' && <li>
                    <a className="dropdown-item" href="/dashboard/user/profil">
                      <i className="fe fe-user me-2" />
                      Profile
                    </a>
                  </li>}
                  {post.type_compte==='apprenant' && <li>
                    <a className="dropdown-item" href="/dashboard/user/profil">
                      <i className="fe fe-user me-2" />
                      Profile
                    </a>
                  </li>}
                  
                  <li>
                    <a className="dropdown-item" href="./pages/student-subscriptions.html">
                      <i className="fe fe-star me-2" />
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fe fe-settings me-2" />
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="dropdown-divider" />
                <ul className="list-unstyled">
                  <li>
                    {connect ? <>
                      <button className="dropdown-item" onClick={logout}>
                        <i className="fe fe-power me-2" />
                        Deconnexion
                      </button>
                    </>
                    : <>
                      <button className="dropdown-item" onClick={login}>
                        <i className="fe fe-power me-2" />
                        Connexion
                      </button>
                    </>}
                    
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          {/* Button */}
          <button className="navbar-toggler collapsed ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar mt-0" />
            <span className="icon-bar middle-bar" />
            <span className="icon-bar bottom-bar" />
          </button>
        </div>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav mt-3 mt-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarBrowse" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">Browse</a>
              
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarLanding" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Landings</a>
              
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarPages" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
              
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
              <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarAccount">
                <li>
                  <h4 className="dropdown-header">Accounts</h4>
                </li>
                
                <li className="dropdown-submenu dropend">
                   {post.type_compte==="admin" && <a className="dropdown-item dropdown-list-group-item" href="/admin">admin</a>}
                   {post.type_compte==="instructeur" && <a className="dropdown-item dropdown-list-group-item" href="/dashboard">instructeur</a>}
                   {post.type_compte==="apprenant" && <a className="dropdown-item dropdown-list-group-item" href="/apprenant">apprenant</a>}
                  
                </li>
                
              </ul>
            </li>
            
          </ul>
          <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search" />
            </span>
            <label htmlFor="search" className="visually-hidden" />
            <input type="search" id="search" className="form-control ps-6" placeholder="Search Courses" />
          </form>
        </div>
      </div>
    </nav>

    
    </>
  )
}
