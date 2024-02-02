import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'
import { accountService } from '../../../_services';
import { useQuery } from '@tanstack/react-query';

export default function Header({user}) {
  // Pour user
  // const flag = useRef(false)
  const [post, setPost] = useState([]);
  // useEffect(()=>{

  //     if(flag.current===false){
  //       accountService.getUser(user)
  //     .then(res => {
  //         if(res.data.etat===true){
  //             console.log(res.data.donnee)
  //             setPost(res.data.donnee);
              
  //         } else {
  //             toast.error("Les identifiants sont incorrects");
  //         }
  //     })
  //     .catch(error => 
  //         toast.error("Erreur connexion")
  //         )
  //     }
  
  //     return () => flag.current = true;;;
  
  //   },[]);

    const {
      // data: categorie,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["user"],
      queryFn: () =>
      accountService.getUser(user)
        .then((res) => {
          setPost(res.data.donnee);
        }),
      onerror: (error) => console.log(error),
    });
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    // fin
    
  return (
    <>
      {/* User info */}
      <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            {/* Bg */}
            <div className="rounded-top" style={{background: 'url(../assets/images/background/profile-bg.jpg) no-repeat', backgroundSize: 'cover', height: 100}} />
            <div className="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
                <div className="d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <img src={`http://127.0.0.1:8000/${post.avatar}`} className="avatar-xl rounded-circle border border-4 border-white" alt="avatar" />
                    </div>
                    <div className="lh-1">
                    <h2 className="mb-0">
                        {post.first_name} {post.last_name}
                        <a href="#" className data-bs-toggle="tooltip" data-placement="top" title="Beginner">
                        {/* <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                            <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                            <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg> */}
                        </a>
                    </h2>
                    <p className="mb-0 d-block">{post.email}</p>
                    </div>
                </div>
                <div>
                    <a href="profile-edit.html" className="btn btn-primary btn-sm d-none d-md-block">Account Setting</a>
                </div>
                </div>
            </div>
            </div>
      </div>
    </>
  )
}
