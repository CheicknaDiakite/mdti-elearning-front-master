import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'
import { accountService } from '../../../_services';


export default function AdminHeader({passId}) {
  let navigate = useNavigate()

  const [post, setPost] = useState([]);
  const flag = useRef(false)

  const logout = () => {
    accountService.logout()
    navigate('/')
  }

  useEffect(()=>{

    if(flag.current===false){
      accountService.getUser(passId)
    .then(res => {
        if(res.data.etat===true){
            console.log(res.data.donnee)
            setPost(res.data.donnee);
            toast.success("Connexion réussie");
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
    <div className="header">
      {/* navbar */}
      <nav className="navbar-default navbar navbar-expand-lg">
        <a id="nav-toggle" href="#">
          <i className="fe fe-menu" />
        </a>
        <div className="ms-lg-3 d-none d-md-none d-lg-block">
          {/* Form */}
          <form className="d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search" />
            </span>
            <input type="search" className="form-control ps-6" placeholder="Search Entire Dashboard" />
          </form>
        </div>
        {/*Navbar nav */}
        <div className="ms-auto d-flex">
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
          <ul className="navbar-nav navbar-right-wrap ms-2 d-flex nav-top-wrap">
            
            {/* List */}
            <li className="dropdown ms-2">
              <a className="rounded-circle" href="#" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="avatar avatar-md avatar-indicators avatar-online">
                  <img alt="avatar" src="../../assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                <div className="dropdown-item">
                  <div className="d-flex">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      <img alt="avatar" src={`http://127.0.0.1:8000/${post.avatar}`} className="rounded-circle" />
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">{post.first_name} {post.last_name}</h5>
                      <p className="mb-0">{post.email}</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <ul className="list-unstyled">
                  {/* <li className="dropdown-submenu dropstart-lg">
                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                      <i className="fe fe-circle me-2" />
                      Status
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-success me-2" />
                          Online
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-secondary me-2" />
                          Offline
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-warning me-2" />
                          Away
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-danger me-2" />
                          Busy
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="/profil/user/profil">
                      <i className="fe fe-user me-2" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
                    <button className="dropdown-item" onClick={logout}>
                      <i className="fe fe-power me-2" />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
