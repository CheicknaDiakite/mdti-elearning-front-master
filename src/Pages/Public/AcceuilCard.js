import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { accountService } from '../../_services';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

export default function AcceuilCard({post}) {
    
  return (
    <>
    
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
    
        
    </>
  )
}
