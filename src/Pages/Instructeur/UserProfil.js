import axios from 'axios';
import React, { useContext, useState } from 'react'

import FormationContext from '../../components/UseContext/formation.context';
import useUtilisateur from '../../components/UseContext/useUtilisateur';


export default function UserProfil() {
  // pour recuperer les infos de l'utilisateur
  const [p, setPost] = useState({});
  const { user } = useContext(FormationContext)
  
  const {user: post} = useUtilisateur(user)
  
  
  // Gestion de la modification des champs du formulaire
  
  const onChange = (e) => {
    setPost({
      ...p,
      [e.target.name]: e.target.value
    })
  }
  // fin
  // pour le profil(photo)
  const [base64Image, setBase64Image] = useState('');
  const [cv, setBase64CV] = useState('');
  const [attestation, setBase64Attest] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleCV = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64CV(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleAttest = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Attest(reader.result);
    };

    reader.readAsDataURL(file);
  };
  // fin
  // pour modifier
  const onSubmit = (e) => {
    e.preventDefault();

    // Créer un objet à envoyer au serveur
    
    p["utilisateur_id"] = user
    
    if(base64Image.includes("base64"))
    {
      p["avatar"] = base64Image
    }else{
      delete p["avatar"]
    }
    // cv
    if(cv.includes("base64"))
    {
      p["cv"] = cv
    }else{
      delete p["cv"]
    }
    // attestation
    if(attestation.includes("base64"))
    {
      p["attestation"] = attestation
    }else{
      delete p["attestation"]
    }
    console.log("oooo",p)

    const { data: res } = axios.post('http://127.0.0.1:8000/utilisateur/profile/set',p);
      // setPosts(res.donnee);
      console.log("modif user",res)
      // navigate('/admin/sous-categorie/index')
      // toast.success("Modification de l'utilisateur' réussie");

    // sousCatService.updateSousCat(data)
    //   .then((response) => {         

    //       console.log("ggg", response.data);          
        
    //     Faire quelque chose avec la réponse
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };
  // fin
  return (
    <>
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
          <div>
            <button className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#newMinCatgory">Changer</button>
            {/* <a href="#" className="btn btn-outline-danger btn-sm">Delete</a> */}
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h4 className="mb-0">Personal Details</h4>
          <p className="mb-4">Edit your personal information and address.</p>
          {/* Form */}
          <form className="row gx-3 needs-validation" onSubmit={onSubmit}>
            {/* Username */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="fname">Username</label>
              <input type="text" name="username" value={post.username} onChange={onChange} className="form-control" placeholder="username" disabled />
              <div className="invalid-feedback">Please enter first name.</div>
            </div>
            {/* Last name */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="lname">Last Name</label>
              <input type="text"name="last_name" onChange={onChange} className="form-control" placeholder={post.last_name} />
              <div className="invalid-feedback">Please enter last name.</div>
            </div>
            {/* First Name */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="address2">First Name</label>
              <input type="text"name="first_name" value={post.first_name} onChange={onChange} className="form-control" placeholder="first_name" />
              <div className="invalid-feedback">Please enter address.</div>
            </div>
            {/* Phone */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input type="text" className="form-control" name="numero" value={post.numero} onChange={onChange} placeholder="numero" />
              <div className="invalid-feedback">Please enter phone number.</div>
            </div>
            {/* Birthday */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">Birthday</label>
              <input className="form-control flatpickr" type="text" name="date_naissance" value={post.date_naissance} onChange={onChange} placeholder="date_naissance" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* travail */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">travail</label>
              <input className="form-control flatpickr" type="text" name="travail" value={post.travail} onChange={onChange} placeholder="travail" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* travail */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="birth">quartier</label>
              <input className="form-control flatpickr" type="text" name="quartier" value={post.quartier} onChange={onChange} placeholder="quartier" />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* Email */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="address">Address </label>
              <input type="email" name='email' value={post.email} onChange={onChange} className="form-control" placeholder="email"  />
              <div className="invalid-feedback">Please enter address.</div>
            </div>
            
            {/* State */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editState">Type de compte</label>
              <select className="form-select" name='type_compte' value={post.type_compte} onChange={onChange} >
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
              <select className="form-select" name='sexe' value={post.sexe} onChange={onChange}>
                <option value>{post.sexe}</option>
                <option value>...</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
              <div className="invalid-feedback">Please choose country.</div>
            </div>
            {post.type_compte === "instructeur" && <>
            
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editCountry">Envoie de cv</label>
              <h1 data-bs-toggle="modal" data-bs-target="#newMinCV">cv</h1>
            </div>

            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="editCountry">Envoie d'attestation</label>
              <h1 data-bs-toggle="modal" data-bs-target="#newMinAttestation">Attestation</h1>
            </div>

            
            </>}
            
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-primary" type="submit">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Modal Miniature Photo */}
    <div className="modal fade" id="newMinCatgory" tabIndex={-1} role="dialog" aria-labelledby="newMinCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Image miniature
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" onChange={handleFileChange} placeholder="Write a Category"  />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary">Add New Category</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    {/* Modal cv */}
    <div className="modal fade" id="newMinCV" tabIndex={-1} role="dialog" aria-labelledby="newMinCVLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New CV</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Envoie de cv
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" onChange={handleCV} placeholder="Write a Category"  />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary">Add New CV</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    {/* Modal attestation */}
    <div className="modal fade" id="newMinAttestation" tabIndex={-1} role="dialog" aria-labelledby="newMinAttestationLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New attestation</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Envoie de attestation
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" onChange={handleAttest} placeholder="Write a Category"  />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary">Add New attestation</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}
