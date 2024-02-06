import React, { useEffect, useState } from 'react'
import { formationService } from '../../../_services/formation.service';
import FormatCard from './FormatCard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { sousCatService } from '../../../_services';

export default function FormationList({user}) {

  // Pour la recuperation de la clé etranger (sous-categorie)
  const [sous, setSous] = useState([]);
  const [sous_categorie_slug, setSouscat] = useState('');
  const [search, setSearch] = useState("");

  const useText = useQueryClient();

  const mutation = useMutation({
    mutationFn: (format) => {
      return formationService.addFormation(format)
    },
    onError: (error) => {
      toast.error("Une erreur est survenue0");
    },
    onSuccess: () => {
      
      useText.invalidateQueries("formations");
      toast.success("Publication ajoutée avec succès");
    //   navigate('/admin/categorie/index')
    },
  });
  
  useEffect(()=>{
    const getPosts = async () =>{

      sousCatService.allSousCat()      
      .then((res) => {        
        setSous(res.data.donnee);
        console.log("sous cat",res)
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
    getPosts();

},[]);
// fin

  // Pour recuperer tous les données de la formation
  const [format, setFormat] = useState([])
  // const [formations, setFormations] = useState([])
  const [base64Image, setBase64Image] = useState('');
  const onChange = (e) => {
    setFormat({
        ...format,
        [e.target.name]: e.target.value
    })
  }
  const top = {
    instructeur_id : user,
  }
  const {
    data: formation,
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["formations"],
    queryFn: () =>
      formationService.allFormation(top)
      .then((res) => res.data),
    onerror: (error) => console.log(error),
  });
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const formations = formation.donnee;

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  
  // fin

  const handleSearch = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearch(value)
  }

      
  const onSubmit = (e) => {
    e.preventDefault();

    format["miniature"]=base64Image
    format["instructeur_id"]=user
    format["sous_categorie_slug"]=sous_categorie_slug

    mutation.mutate(format)

  };
  

  return (
    <>
    {/* Formation */}
    <div className="card mb-4">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Ajout des Formations</h3>
        <span>Manage your courses and its update like live, draft and insight.</span>
      </div>
      {/* Card body */}
      <div className="card-body">
        {/* Form */}
        <div className="row gx-3">
          <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
            {/* <input type="search" className="form-control" placeholder="Search Your Courses" /> */}
            <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newFormat">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

            </button>
          </div>
          
        </div>
      </div>
      {/* Card header */}
      <div className="card-header border-bottom-0">
        {/* Form */}
        <form className="d-flex align-items-center">
          <span className="position-absolute ps-3 search-icon">
            <i className="fe fe-search" />
          </span>
          <input type="search" className="form-control ps-6" onChange={handleSearch} placeholder="Search Course formation" />
        </form>
      </div>
      {/* Table */}
      <div className="table-responsive overflow-y-hidden">
        <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
          <thead className="table-light">
            <tr>
              <th>Courses</th>
              
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            
            {formations?.length > 0 ? 
              formations.filter((val) => {
                return val.nom.toLowerCase().includes(search.toLowerCase());
              }).map((post)=> {
                
                return <FormatCard user={user} formation={post} />
              })
              : 'Pas de chapitre'
              }
                
          </tbody>
        </table>
      </div>
    </div>
    {/* Modal Formation*/}
    <div className="modal fade" id="newFormat" tabIndex={-1} role="dialog" aria-labelledby="newFormatLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Formation</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <form className="needs-validation" onSubmit={onSubmit}>
              <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                  Nom
                  <span className="text-danger">*</span>
                </label>
                <input type="text" name='nom' onChange={onChange} className="form-control" placeholder="Le nom de la formation" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter formation.</div>
              </div>
              <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                Nombre d'heure
                  <span className="text-danger">*</span>
                </label>
                <input type="text" name='nombre_heur' onChange={onChange} className="form-control" placeholder="Nombre d'heure de la formation" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter nombre_heur.</div>
              </div>
              <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                  Prix
                  <span className="text-danger">*</span>
                </label>
                <input type="number" name='prix' onChange={onChange} className="form-control" placeholder="Prix de la formation" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter prix.</div>
              </div>
              <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                  Image miniature
                  <span className="text-danger">*</span>
                </label>
                <input type="file" onChange={handleFileChange} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
              </div>

              <div className="mb-3 mb-2">
                <select class="form-select" onChange={(e) => setSouscat(e.target.value)} >
                  <option selected>Categorie de la formation</option>
                  <option >..</option>
                  {sous?.map((post) => (
                    <option value={post.slug}>{post.nom}</option>
                  ))}
                    
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
