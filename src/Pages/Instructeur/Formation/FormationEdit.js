import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import toast from 'react-hot-toast';
import { accountService, formationService } from '../../../_services';
import FormationContext from '../../../components/UseContext/formation.context';


export default function FormationEdit() {
  let {slug} = useParams()

  const {user, sous_categories, updateFormation} = useContext(FormationContext)

  
  const [ajout_terminer, setTerminer] = useState(false);

  const Ajout_Terminer = () => {
    ajout_terminer ? setTerminer(false) : setTerminer(true)
  }

  const [base64Image, setBase64Image] = useState('');
  const [post, setPost] = useState([]);
  
  // pour recuperer la formations
  const [nom, setName] = useState([]);
  
  
  const flag = useRef(false)
  // pour une formation  

  useEffect(()=>{
    console.log('text 0')
    
    if(flag.current===false){
      formationService.unFormation(slug)
      .then(res => {
        if(res.data.etat===true){

          console.log("Formation",res.data.donnee)
          setName(res.data.donnee);
        } else {
          toast.error("Nom trouver");
        }
      })
      .catch(err => console.log(err))
    }
    return () => flag.current = true;;;
    
  },[]);
  // fin

  // Pour user
  useEffect(()=>{

    if(flag.current===false){
      accountService.getUser(user)
    .then(res => {
        if(res.data.etat===true){
            
            setPost(res.data.donnee);
            
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
  // fin

  const [yes, setYes] = useState([]);
  const onChange = (e) => {
    setYes({
      ...yes,
      [e.target.name]: e.target.value
    })
  }
  const [prix, setPrix] = useState([]);
  const onChangePrix = (e) => {
    setPrix({
      ...prix,
      [e.target.name]: e.target.value
    })
  }
  const [nbr, setNbr] = useState([]);
  const onChangeNbr = (e) => {
    setNbr({
      ...nbr,
      [e.target.name]: e.target.value
    })
  }
  const [pre, setPre] = useState([]);
  const onChangePre = (e) => {
    setPre({
      ...pre,
      [e.target.name]: e.target.value
    })
  }
  const [desc, setDesc] = useState([]);
  const onChangeDesc = (e) => {
    setDesc({
      ...desc,
      [e.target.name]: e.target.value
    })
  }
  const [pro, setPro] = useState([]);
  const onChangePro = (e) => {
    setPro({
      ...pro,
      [e.target.name]: e.target.value
    })
  }
  const [obj, setObj] = useState([]);
  const onChangeObj = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value
    })
  }
  const [scat, setScat] = useState([]);
  const onChangeScat = (e) => {
    setScat({
      ...scat,
      [e.target.name]: e.target.value
    })
  }
  const [pho, setPho] = useState([]);
  const onChangeSt = (e) => {
    setPho({
      ...pho,
      [e.target.name]: e.target.value
    })
  }
  // fin

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmitAjout_T = (e) => {
    e.preventDefault();    
       
    const data = { 
      slug:slug,
      ajout_terminer: ajout_terminer
    };
    
    updateFormation(data)

  };
  const onSubmitNom = (e) => {
    e.preventDefault(); 
    
    yes["slug"]=slug
    
    updateFormation(yes)
  };
  const onSubmitDesc = (e) => {
    e.preventDefault();

    // console.log("description ", desc)
    desc["slug"]=slug

    updateFormation(desc)
  };
  const onSubmitN_H = (e) => {
    e.preventDefault();

    // console.log("nombre_heure ", nbr)
    nbr["slug"]=slug

    updateFormation(nbr)
  };
  const onSubmitObj = (e) => {
    e.preventDefault();

    obj["slug"]=slug

    updateFormation(obj)

  };
  const onSubmitPrere = (e) => {
    e.preventDefault();

    pre["slug"]=slug

    updateFormation(pre)

  };
  const onSubmitPhoto = (e) => {
    e.preventDefault();
    const pho = {}
    
    if(base64Image.includes("base64"))
    {
      pho["miniature"] = base64Image
      pho["instructeur_id"] = user
      pho["slug"]=slug
    }else{
      delete pho["miniature"]
    }

    updateFormation(pho)

  };
  const onSubmitPrix = (e) => {
    e.preventDefault();

    // console.log("prix ", prix)
    prix["slug"]=slug
    
    updateFormation(prix)

  };
  const onSubmitSousCat = (e) => {
    e.preventDefault();

    // console.log("SousCate ", scat)
    scat["slug"]=slug
    updateFormation(scat)

  };
  const onSubmitPro_De = (e) => {
    e.preventDefault();

    updateFormation(pro)

  };
  const onSubmit = (e) => {
    e.preventDefault();

    nom["ajout_terminer"] = ajout_terminer

    if(base64Image.includes("base64"))
    {
      nom["miniature"] = base64Image
      nom["instructeur_id"] = user
    }else{
      delete nom["miniature"]
    }
    
       

    // Créer un objet à envoyer au serveur
    // const data = { 
      
    //   nom,      
    //   instructeur_id: 1,
    // };
    
    formationService.updateFormation(nom)
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
    <section className="container-fluid p-4">

    <div className="row g-3" >
      <div className="col-md-4">
        <label className="form-label">
          Nom
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newNomCatgory">Modifier.</span>
        </label>        
        <input type="text" className="form-control" name='nom' value={nom.nom} disabled />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Prix
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPrixCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='prix' value={nom.prix} disabled/>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">
          Username
        </label>
        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" className="form-control" placeholder={post.username} disabled />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Nombre heure
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newNomHeuCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='nombre_heur' value={nom.nombre_heur} disabled />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault04" className="form-label">
          Sous Categorie
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newSoCatCatgory">Modifier.</span>
        </label>
        <select className="form-select" disabled>
          <option selected disabled >{nom.sous_categorie_slug}</option>
        </select>
      </div>
      <div className="mb-3 mb-2">
        <label className="form-label" htmlFor="title">
          Image miniature
          <span className="text-danger">*</span>
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newMinCatgory">Modifier.</span>
        </label>
        <div>
          <img src={`http://127.0.0.1:8000/${nom.miniature}`} alt="course" className="rounded img-4by3-lg" />
        </div>
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">
          Description
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newDesCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='description' value={nom.description} disabled />
      </div>   
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">
          Prerequis
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPreCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='prerequis' value={nom.prerequis} disabled />
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">
          Profile destine
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPrDeCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='profile_destine' value={nom.profile_destine} disabled />
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">
          Objetif du cours
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newObCatgory">Modifier.</span>
        </label>
        <input type="text" className="form-control" name='objectif_du_cours' value={nom.objectif_du_cours} disabled />
      </div>
      {post.type_compte==='instructeur' && 
      <div className="col-12">
        
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={Ajout_Terminer}/>
          <label class="form-check-label" for="flexSwitchCheckChecked">Ajout terminer {ajout_terminer ? ajout_terminer.toString() : ajout_terminer.toString()} </label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={onSubmitAjout_T}>Ajouter</button>
          
        </div>
      </div>}

    </div>

      
    </section>

    {/* Modal */}

    {/* Nom */}
    <div className="modal fade" id="newNomCatgory" tabIndex={-1} role="dialog" aria-labelledby="newNomCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitNom}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Nom
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nom' onChange={onChange} className="form-control" placeholder="Write a Category" required />
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
    {/* Prix */}
    <div className="modal fade" id="newPrixCatgory" tabIndex={-1} role="dialog" aria-labelledby="newPrixCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitPrix}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Prix
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='prix' onChange={onChangePrix} className="form-control" placeholder="Write a Category" required />
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
    {/* Nombre Heure */}
    <div className="modal fade" id="newNomHeuCatgory" tabIndex={-1} role="dialog" aria-labelledby="newNomHeuCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitN_H}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                  Nombre Heure
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nombre_heur' onChange={onChangeNbr} className="form-control" placeholder="Write a Category" required />
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
    {/* Prerequis */}
    <div className="modal fade" id="newPreCatgory" tabIndex={-1} role="dialog" aria-labelledby="newPreCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitPrere}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                  Prerequis
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='prerequis' onChange={onChangePre} className="form-control" placeholder="Write a Category" required />
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
    {/* Description */}
    <div className="modal fade" id="newDesCatgory" tabIndex={-1} role="dialog" aria-labelledby="newDesCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitDesc}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Description
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='description' onChange={onChangeDesc} className="form-control" placeholder="Write a Category" required />
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
    {/* Profil Destiner */}
    <div className="modal fade" id="newPrDeCatgory" tabIndex={-1} role="dialog" aria-labelledby="newPrDeCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitPro_De}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                  Profil Destiner
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='profile_destine' onChange={onChangePro} className="form-control" placeholder="Write a Category" required />
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
    {/* Objectif */}
    <div className="modal fade" id="newObCatgory" tabIndex={-1} role="dialog" aria-labelledby="newObCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitObj}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Objectif du cours
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='objectif_du_cours' onChange={onChangeObj} className="form-control" placeholder="Write a Category" required />
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
    {/* Miniature Photo */}
    <div className="modal fade" id="newMinCatgory" tabIndex={-1} role="dialog" aria-labelledby="newMinCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmitPhoto}>
                
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Image miniature
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" className="form-control" onChange={handleFileChange} placeholder="Write a Category" required />
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
    {/* SOus Categorie */}
    <div className="modal fade" id="newSoCatCatgory" tabIndex={-1} role="dialog" aria-labelledby="newMinCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <form className="needs-validation" onSubmit={onSubmitSousCat}>

              <div className="mb-3 mb-2">
                <select class="form-select" name='sous_categorie_slug' onChange={onChangeScat} >
                    <option selected>SousCat</option>
                    <option >..</option>
                    {sous_categories.map((post) => (

                        <option value={post.slug}>{post.nom}</option>
                    ))}
                    {/* <option value="apprenant">Student</option>
                    <option value="instructeur">Instructeur</option> */}
                </select>
                <div className="invalid-feedback">Please enter valid type_compte.</div>
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
    </>
    
  )
}
