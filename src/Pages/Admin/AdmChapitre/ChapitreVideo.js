import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { videoService } from '../../../_services';
import { Link } from 'react-router-dom';

export default function ChapitreVideo({videos, slug}) { 
  
    
  return (
    <>     
      {videos?.map((post)=> (
        <div className="pt-3 pb-2">
          <Link to={`/formation/vue-video/${slug}`} className="mb-2 d-flex justify-content-between align-items-center text-inherit">
              <div className="text-truncate">
              <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z">
                </path></svg>
              </span>
              <span>{post.nom}</span>
              </div>
              <div className="text-truncate">
              <span>1m 7s</span>
              </div>
          </Link>
    
    
        </div>
      ))}
          
    
    </>
  )
}
