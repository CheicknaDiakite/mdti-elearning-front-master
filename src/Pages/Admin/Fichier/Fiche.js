import React from 'react'
import { useParams } from 'react-router-dom'
import useUtilisateur from '../../../components/UseContext/useUtilisateur'
import { BASE } from '../../../_services/caller.service'

export default function Fiche() {
    let {id} = useParams()
    const {user: post} = useUtilisateur(id)

    const downloadPDF = () => {
      // L'URL du fichier PDF à télécharger
      const pdfURL = BASE(post.cv);
      // Nom du fichier PDF à télécharger
      // const fileName = 'document.pdf';
  
      // Créer un lien temporaire
      const link = document.createElement('a');
      link.href = pdfURL;
      // link.download = fileName;
  
      // Ajouter le lien au document
      document.body.appendChild(link);
  
      // Simuler un clic sur le lien pour démarrer le téléchargement
      link.click();
  
      // Nettoyer le lien après le téléchargement
      document.body.removeChild(link);
    };
    const downloadAttest = () => {
      // L'URL du fichier PDF à télécharger
      const pdfURL = BASE(post.attestation);
      // Nom du fichier PDF à télécharger
      // const fileName = 'document.pdf';
  
      // Créer un lien temporaire
      const link = document.createElement('a');
      link.href = pdfURL;
      // link.download = fileName;
  
      // Ajouter le lien au document
      document.body.appendChild(link);
  
      // Simuler un clic sur le lien pour démarrer le téléchargement
      link.click();
  
      // Nettoyer le lien après le téléchargement
      document.body.removeChild(link);
    };

  return (
    <>
    <section className="container-fluid p-4">

    {/* Card */}
    <div className="card">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Profile Details</h3>
        <p className="mb-0">You have full control to manage your own account setting.</p>
      </div>
      {/* Card body */}
      <div className="card-body">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-4 mb-lg-0">
            <img src={`http://127.0.0.1:8000/${post.avatar}`} id="img-uploaded" className="avatar-xl rounded-circle" alt="avatar" />
            <div className="ms-3">
              <h4 className="mb-0">Votre Profil</h4>
              <p className="mb-0">{post.last_name} {post.first_name}</p>
            </div>
          </div>
        
        </div>
        <hr className="my-5" />
        <div>
          <h4 className="mb-0">Personal Details</h4>
          <p className="mb-4">Edit your personal information and address.</p>
          {/* Form */}
          
            {/* Username */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="fname">Username</label>
              <input type="text" name="username" value={post.username}  className="form-control" placeholder="username" disabled />
              <div className="invalid-feedback">Please enter first name.</div>
            </div>
            {/* Last name */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="lname">Last Name</label>
              <input type="text"name="last_name" value={post.last_name} className="form-control" placeholder="last_name" />
              <div className="invalid-feedback">Please enter last name.</div>
            </div>
            {/* First Name */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="address2">First Name</label>
              <input type="text"name="first_name" value={post.first_name} className="form-control" placeholder="first_name" />
              <div className="invalid-feedback">Please enter address.</div>
            </div>
            {/* Phone */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input type="text" className="form-control" name="numero" value={post.numero} placeholder="numero" />
              <div className="invalid-feedback">Please enter phone number.</div>
            </div>
            {/* Birthday */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">Birthday</label>
              <input className="form-control flatpickr" type="text" name="date_naissance" value={post.date_naissance} placeholder="date_naissance" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* travail */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">travail</label>
              <input className="form-control flatpickr" type="text" name="travail" value={post.travail} placeholder="travail" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* travail */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">quartier</label>
              <input className="form-control flatpickr" type="text" name="quartier" value={post.quartier} placeholder="quartier" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* Email */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="address">Address </label>
              <input type="email" name='email' value={post.email} className="form-control" placeholder="email"  />
              <div className="invalid-feedback">Please enter address.</div>
            </div>
            
            {/* State */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editState">Type de compte</label>
              <select className="form-select" name='type_compte' value={post.type_compte} >
                <option value>{post.type_compte}</option>
                <option value>...</option>
                {post.type_compte==='admin'&& <option value="Admin">Admin</option>}                
                <option value="Apprenant">Apprenant</option>
                <option value="Instructeur">Instructeur</option>
                
              </select>
              <div className="invalid-feedback">Please choose state.</div>
            </div>
            {/* Sexe */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editCountry">Genre</label>
              <select className="form-select" name='sexe' value={post.sexe}>
                <option value>{post.sexe}</option>
                <option value>...</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
              <div className="invalid-feedback">Please choose country.</div>
            </div>
            {post.type_compte === "instructeur" && <>
            
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editCountry">CV</label>
              <div>
                <button onClick={downloadPDF}>Télécharger le PDF</button>
              </div>
            </div>
            
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editCountry">Attestation</label>
              <div>
                <button onClick={downloadAttest}>Télécharger le PDF</button>
              </div>
            </div>
            
            </>}
            
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-primary" type="submit">Update Profile</button>
            </div>
         
        </div>
      </div>
    </div>
    </section>

    
    </>
  )
}
