import React from 'react'

export default function Seance() {
  return (
    <>
    <div className="card border-0">
    {/* Card header */}
    <div className="card-header d-lg-flex justify-content-between align-items-center">
        <div className="mb-3 mb-lg-0">
        <h3 className="mb-0">Pour prendre une seance de travail pour cet formation : {cour.nom}</h3>
        {/* <p className="mb-0">Here is list of package/product that you have subscribed.</p> */}
        </div>
        <div>
        <a href="pricing.html" className="btn btn-success btn-sm">Le prix de la formation ${cour.prix}</a>
        </div>
    </div>
    {/* Card body */}
    <div className="card-body">
        <div className="border-bottom pt-0 pb-5">
        <div className="row mb-4">
          <div className="col-lg-6 col-md-8 col-7 mb-2 mb-lg-0">
            <span className="d-block">
              <span className="h4">{cour.nom}</span>
              
            </span>
            
          </div>

          <div className="col-lg-3 col-md-12 col-12 d-lg-flex align-items-start justify-content-end">
            <a className="btn btn-outline-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#newSeanceCatgory">Cliquez ici.</a>
          </div>
        </div>
        {/* Pricing data */}
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">date ajout</span>
            <h6 className="mb-0">{cour.date}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">profile_destine</span>
            <h6 className="mb-0">{cour.profile_destine}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">Nombre Heur</span>
            <h6 className="mb-0">{cour.nombre_heur}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">prerequis</span>
            <h6 className="mb-0">{cour.prerequis}</h6>
          </div>
        </div>

        <div>
          <h2>Le lien des differents seances</h2>
        </div>

        {seance?.map((post) => (

        <div className="row my-2 py-2">
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">date de la reunion</span>
            <h6 className="mb-0">{post.date_de_la_reunion}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">Lien de la reunion</span>
            <h6 className="mb-0">{post.lien_de_la_reunion}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">Motif de la reunion</span>
            <h6 className="mb-0">{post.nom}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">date Ajout</span>
            <h6 className="mb-0">{post.date}</h6>
          </div>
        </div>
        ))}

        </div>
        
    </div>
    </div>
    </>
  )
}
