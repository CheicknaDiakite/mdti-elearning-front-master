
import React, { useContext, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { accountService } from '../../../_services';
import DiscutionChat from '../Discution/DiscutionChat';
import TemoinFormation from '../Temoin/TemoinFormation';

import Chapitre from '../Chapitre/Chapitre';

import AbonCour from '../../Public/AbonCour/AbonCour';
import FormationQcm from '../Qcm/FormationQcm';
import FormationContext, { DiscutionChatProvider } from '../../../components/UseContext/formation.context';
import useForma from '../../../components/UseContext/useForma';

export default function FormationDetail() {
    let {slug} = useParams()

    const { user } = useContext(FormationContext)
    const {formati: cour} = useForma(slug)

    const [post, setPost] = useState([]);
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
    // pour une formation
    
  return (
    <>
    <div>
        {/* Page Content */}
        
        <main>
        {/* Page header */}
        <section className="pt-lg-8 pb-8 bg-primary">
            <div className="container pb-lg-8">
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-12">
                <div>
                    <h1 className="text-white display-4 fw-semibold">{cour.nom}</h1>
                    <p className="text-white mb-6 lead">
                        
                    JavaScript is the popular programming language which powers web pages and web
                    applications. This course will get you started coding in JavaScript.
                    </p>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Page content */}
        <section className="pb-8">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-12 mt-n8 mb-4 mb-lg-0">
                {/* Card */}
                <div className="card rounded-3">
                    {/* Card header */}
                    <div className="card-header border-bottom-0 p-0">
                    <div>
                        {/* Nav */}
                        <ul className="nav nav-lb-tab" id="tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="table-tab" data-bs-toggle="pill" href="#table" role="tab" aria-controls="table" aria-selected="true">Les differents chapitres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="description-tab" data-bs-toggle="pill" href="#description" role="tab" aria-controls="description" aria-selected="false">
                            Description
                            </a>
                        </li>
                        {post.type_compte!=="instructeur" && <li className="nav-item">
                            <a className="nav-link" id="review-tab" data-bs-toggle="pill" href="#review" role="tab" aria-controls="review" aria-selected="false">Discution</a>
                        </li>}
                        
                        <li className="nav-item">
                            <a className="nav-link" id="temoin-tab" data-bs-toggle="pill" href="#temoin" role="tab" aria-controls="temoin" aria-selected="false">Temoignages</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" id="transcript-tab" data-bs-toggle="pill" href="#transcript" role="tab" aria-controls="transcript" aria-selected="false">
                            Chapitre
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" id="faq-tab" data-bs-toggle="pill" href="#faq" role="tab" aria-controls="faq" aria-selected="false">Qcm</a>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active" id="table" role="tabpanel" aria-labelledby="table-tab">
                            {/* Chapitre */}
                            <div className="accordion" id="courseAccordion">
                                <Chapitre slug={slug}/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                        {/* Description */}
                        <div className="mb-4">
                            <h3 className="mb-2">Course Descriptions</h3>
                            <p>
                            {/* {cour.description} */}
                            {cour.description}
                            </p>
                            <h3 className="mb-2">Course prerequis</h3>
                            {/* {cour.prerequis} */}
                            {cour.prerequis}
                            <h3 className="mb-2">Course profile_destine</h3>
                            {/* {cour.profile_destine} */}
                            {cour.profile_destine}
                            <h3 className="mb-2">Course objectif_du_cours</h3>
                            {/* {cour.objecti_du_cours} */}
                            {cour.objecti_du_cours}
                        </div>
                        <h4 className="mb-3">What you’ll learn</h4>
                        
                        </div>
                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        {/* Discution */}
                        <DiscutionChatProvider value={{slug}}>
                            <DiscutionChat slug={slug} />
                        </DiscutionChatProvider>
                        <hr className="my-5" />
                        
                        </div>

                        <div className="tab-pane fade" id="temoin" role="tabpanel" aria-labelledby="temoin-tab">
                            {/* Temoin */}                            
                            <TemoinFormation slug={slug} />
                        </div>
                        <div className="tab-pane fade" id="transcript" role="tabpanel" aria-labelledby="transcript-tab">
                        
                        </div>
                        {/* Qcm */}
                        <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                            <h1>QCM</h1>
                            <FormationQcm slug={slug}/>
                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 mt-lg-n8">
                {/* Card */}
                <div className="card mb-3 mb-4">
                    <div className="p-1">
                    <div className="d-flex justify-content-center align-items-center rounded border-white border rounded-3 bg-cover" style={{backgroundImage: 'url(../assets/images/course/course-javascript.jpg)', height: 210}}>
                        <a className="glightbox icon-shape rounded-circle btn-play icon-xl" href="https://www.youtube.com/watch?v=Nfzi7034Kbg">
                        <i className="fe fe-play" />
                        </a>
                    </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                    {/* Price single page */}
                    <div className="mb-3">
                        <span className="text-dark fw-bold h2">${cour.prix}</span>
                        
                    </div>
                    <div className="d-grid">
                        <Link to={`/dashboard/formation/seanceTravail/${slug}`} className="btn btn-primary mb-2">Seance de travail</Link>
                        <AbonCour slug={slug} cour={cour} />
                    </div>
                    </div>
                </div>                
                
                </div>
            </div>
            
            </div>
        </section>
        </main>

    </div>

    

    </>
  )
}
