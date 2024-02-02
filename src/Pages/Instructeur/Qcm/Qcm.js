import React, { useState } from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Qcm() {

  // pour l'envoye du formulaire
  const [nom, setName] = useState([]);
  let {slug} = useParams()
  const onChange = (e) => {
  setName({
    ...nom,
    [e.target.name]: e.target.value
  })
  }
  // fin
  const onSubmit = (e) => {
    e.preventDefault();       

    // Créer un objet à envoyer au serveur
    // const data = { 
      
    //   nom,      
    //   instructeur_id: 1,
    // };
    nom["formation_slug"]= slug
    
    axios.post('http://127.0.0.1:8000/formation/qcm/add',nom)
      .then((response) => {
        console.log("UpdateForma",response.data);
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <>
     {/* Qcm */}
      <section className="container-fluid p-4">
        <label className="form-label">Pour les QCM</label> 
          <form className="needs-validation" onSubmit={onSubmit}>
              <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                      Nom
                      <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nom' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
              </div>
              <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                      Durée
                      <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='duree' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
              </div>
              <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                      Description
                      <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='description' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
              </div>
              
              <div>
              <button type="submit" className="btn btn-primary">Add New Category</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </form>
      </section>
    </>
  )
}
