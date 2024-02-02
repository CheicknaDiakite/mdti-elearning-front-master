import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import toast from 'react-hot-toast';

import { formationChapitre } from '../../../_services/formation.service';
import CardChapitre from './CardChapitre';

export default function Chapitre() {

  
  const [nom, setName] = useState('');
  const [formation, setFormation] = useState('');
  const [posts, setPosts] = useState([]);
  const [sous, setSous] = useState([]);
  
  
  let navigate = useNavigate();

  const flag = useRef(false)
  // Etranger-clé
  useEffect(()=>{
    console.log('text 0')
    
    if(flag.current===false){
      axios.post('http://127.0.0.1:8000/formation/get-all')
      .then(res => {
        if(res.data.etat===true){

          console.log("test uu",res.data.donnee)
          setSous(res.data.donnee);
        } else {
          toast.error("Nom trouver");
        }
      })
      .catch(err => console.log(err))
    }
    return () => flag.current = true;;;
    
  },[]);
  // fin
  
  // pour Recuperation des chapitres
  useEffect(()=>{
    const getPosts = async () =>{
      formationChapitre.tousChapitre()
      .then((res) => {
        
        console.log("reuissi",res.data)
        setPosts(res.data.donnee);
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
    getPosts();

  },[]);
  // fin ajout
  
  

  return (
    <>      
     
        {/* Container fluid */}
        <section className="container-fluid p-4">
          <div className="row">
            {/* Page Header */}
            <div className="col-lg-12 col-md-12 col-12">
              <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
                <div className="mb-3 mb-md-0">
                  <h1 className="mb-1 h2 fw-bold">Courses Chapitre</h1>
                  {/* Breadcrumb */}
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="../dashboard/admin-dashboard.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Courses</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Courses Category</li>
                    </ol>
                  </nav>
                </div>
                {/* <div>
                  <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newCatgory">Add New Category</a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header border-bottom-0">
                  {/* Form */}
                  <form className="d-flex align-items-center">
                    <span className="position-absolute ps-3 search-icon">
                      <i className="fe fe-search" />
                    </span>
                    <input type="search" className="form-control ps-6" placeholder="Search Course Category" />
                  </form>
                </div>
                {/* Table */}
                <div className="table-responsive border-0 overflow-y-hidden">
                  <table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
                    <thead className="table-light">
                      <tr>
                        <th>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkAll" />
                            <label className="form-check-label" htmlFor="checkAll" />
                          </div>
                        </th>
                        
                        <th>Nom</th>
                        <th>Image</th>
                        {/* <th>Date Created</th>
                        <th>Date Updated</th> */}
                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                    {posts?.length > 0 ? 
                      posts.map((category) => (
                         <CardChapitre key={category.id} categorie={category} />
                      )) : (
                        'Pas chapitre'
                      )
                    }
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
      
    </>
   
  )
}
