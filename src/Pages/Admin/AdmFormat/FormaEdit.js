
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import toast from 'react-hot-toast';
import { accountService, formationChapitre, formationService } from '../../../_services';
import { useQuery } from '@tanstack/react-query';
import FormationContext from '../../../components/UseContext/formation.context';

export default function FormaEdit() {
  const { user, sous_categories } = useContext(FormationContext)

  console.log("soouuss_catego ...",sous_categories)
  let {slug} = useParams()

  const [publier, setPublier] = useState(false);
  const [moderer, setModerer] = useState(false);
  
  const flag = useRef(false)

  const Publier = () => {
    publier ? setPublier(false) : setPublier(true)
  }
  const Moderer = () => {
    moderer ? setModerer(false) : setModerer(true)
  }
  
    
    const [base64Image, setBase64Image] = useState('');
    
    const [chapitres, setChapitre] = useState([]);
    // user
    const userID = accountService.getToken()
    const [post, setPost] = useState([]);
    // console.log("okkkkk",slug)
    useEffect(()=>{

      if(flag.current===false){
        accountService.getUser(userID)
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
    
    
    
   // Pour la recuperation de la clé etranger (chapitre)
   useEffect(()=>{
    const getPosts = async () =>{

      const sluger = {
        "formation_slug": slug
      }

      console.log("tesssss",sluger)

      formationChapitre.allChapitre(sluger)
      .then((res) => {
        
        setChapitre(res.data.donnee);
        console.log("chapitre",res.data)
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    };
    getPosts();

  },[]);
  // fin
    

    // Pour user
    useEffect(()=>{

      if(flag.current===false){
        accountService.getUser(userID)
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

  // pour l'envoye du formulaire
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
  // pour la recuperation d'un formation
  const {
    data: formation,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["formati", slug],
    queryFn: () =>
    formationService.unFormation(slug)
      .then((res) => res.data),
    onerror: (error) => console.log(error),
  });
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const nom = formation.donnee
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

  const onSubmitNom = (e) => {
    e.preventDefault(); 
    
    console.log("nom ", yes)
    yes["slug"]=slug
    
    formationService.updateFormation(yes)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitDesc = (e) => {
    e.preventDefault();

    console.log("description ", desc)
    desc["slug"]=slug
    formationService.updateFormation(desc)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitN_H = (e) => {
    e.preventDefault();

    console.log("nombre_heure ", nbr)
    nbr["slug"]=slug
    formationService.updateFormation(nbr)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitObj = (e) => {
    e.preventDefault();

    console.log("objectif ", obj)
    obj["slug"]=slug
    formationService.updateFormation(obj)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitPrere = (e) => {
    e.preventDefault();

    console.log("prerequis ", pre)
    pre["slug"]=slug
    formationService.updateFormation(pre)
      .then((response) => {
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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


    formationService.updateFormation(pho)
      .then((response) => {
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitPrix = (e) => {
    e.preventDefault();

    console.log("prix ", prix)
    prix["slug"]=slug
    
    formationService.updateFormation(prix)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitSousCat = (e) => {
    e.preventDefault();

    scat["slug"]=slug
    formationService.updateFormation(scat)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitPro_De = (e) => {
    e.preventDefault();

    console.log("profil destiner ", pro)
    
    formationService.updateFormation(pro)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitPublier = (e) => {
    e.preventDefault();    
       
    const data = { 
      slug:slug,
      publier: publier
    };
    
    formationService.updateFormation(data)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onSubmitModere = (e) => {
    e.preventDefault();    
       
    const data = { 
      slug:slug,
      moderer: moderer
    };
    
    formationService.updateFormation(data)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
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
        <label className="form-label">Nom</label>        
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newNomCatgory">Success</span>
        <input type="text" className="form-control" name='nom' value={nom.nom} disabled />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Prix</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPrixCatgory">Success</span>
        <input type="text" className="form-control" name='prix' value={nom.prix} disabled/>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" className="form-control" placeholder={post.username} disabled />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">Nombre heure</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newNomHeuCatgory">Success</span>
        <input type="text" className="form-control" name='nombre_heur' value={nom.nombre_heur} disabled />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault04" className="form-label">Sous Categorie</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newSoCatCatgory">Success</span>
        <select className="form-select" disabled>
          <option selected disabled >{nom.sous_categorie_slug}</option>

          {sous_categories.map((post) => (
            <option value={post.slug}>{post.nom}</option>

          ))}
          
        </select>
      </div>
      <div className="mb-3 mb-2">
        <label className="form-label" htmlFor="title">
          Image miniature
          <span className="text-danger">*</span>
          <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newMinCatgory">Success</span>
        </label>
        <input type="file" className="form-control" placeholder="Write a Category" disabled />
        <small>Field must contain a unique value</small>
        <div className="invalid-feedback">Please enter category.</div>
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">Description</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newDesCatgory">Success</span>
        <input type="text" className="form-control" name='description' value={nom.description} disabled />
      </div>   
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">Prerequis</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPreCatgory">Success</span>
        <input type="text" className="form-control" name='prerequis' value={nom.prerequis} disabled />
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">Profile destine</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newPrDeCatgory">Success</span>
        <input type="text" className="form-control" name='profile_destine' value={nom.profile_destine} disabled />
      </div>
      <div className="col-md-10">
        <label htmlFor="validationDefault05" className="form-label">Objetif du cours</label>
        <span class="badge text-bg-success" data-bs-toggle="modal" data-bs-target="#newObCatgory">Success</span>
        <input type="text" className="form-control" name='objectif_du_cours' value={nom.objectif_du_cours} disabled />
      </div>

      {post.type_compte==='admin' &&
        <>
        <div className="col-12">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={Moderer}/>
          <label class="form-check-label" for="flexSwitchCheckChecked">Moderer {moderer ? moderer.toString() : moderer.toString()} input</label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={onSubmitModere}>Moderer</button>
          
        </div>
        </div>
        <div className="col-12">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={Publier}/>
          <label class="form-check-label" for="flexSwitchCheckChecked">Publier {publier ? publier.toString() : publier.toString()} input</label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={onSubmitPublier}>Publier</button>
          
        </div>
        </div>
        </>}
      
      
      {/* <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div> */}
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
