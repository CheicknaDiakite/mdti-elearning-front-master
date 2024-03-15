import React, { useState } from 'react'
import SousCard from './SousCard'
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { sousCatService } from '../../../_services';
import toast from 'react-hot-toast';

export default function SousCate() {
    let {slug} = useParams()
    const sluger = {
    "categorie_slug": slug
    }
    // les condition pour l'ajout
    const [base64Image, setBase64Image] = useState('');
    const [nom, setNom] = useState([]);
    const onChange = (e) => {
      setNom({
          ...nom,
          [e.target.name]: e.target.value
      })
    }

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const useText = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => {
      return sousCatService.addSousCat(nom)
    },
    onError: (error) => {
      toast.error("Une erreur est survenue0");
    },
    onSuccess: () => {
      
      useText.invalidateQueries({queryKey: ["sousCategories"]});
      toast.success("Publication ajoutée avec succès");
    //   navigate('/admin/categorie/index')
    },
  });
    // fin
    
    // Pour afficher les differents sous-categories
    const {
      data: sousCategorie,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["sousCategories", sluger],
      queryFn: () =>
        sousCatService.getSousCat(sluger)
        .then((res) => res.data),
      onerror: (error) => console.log(error),
    });
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    const sous_categories = sousCategorie.donnee
    // fin

    // Pour ajouter les sous-categories
    
    const onSubmit = (e) => {
      e.preventDefault();

      nom["image"]=base64Image
      nom["categorie_slug"]=slug
      mutation.mutate(nom)
  
    };
    // fin

  return (
    <>
    {/* Sous Categorie */}
    <div className="card mb-4">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Sous Categorie</h3>
        {/* <span>Manage your courses and its update like live, draft and insight.</span> */}
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
          {/* <div className="col-lg-3 col-md-5 col-12">
            <select className="form-select">
              <option value>Date Created</option>
              <option value="Newest">Newest</option>
              <option value="High Rated">High Rated</option>
              <option value="Law Rated">Law Rated</option>
              <option value="High Earned">High Earned</option>
            </select>
          </div> */}
        </div>
      </div>
      {/* Table */}
      <div className="table-responsive overflow-y-hidden">
        <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
          <thead className="table-light">
            <tr>
              <th>Sous-Categorie</th>
              
              <th />
            </tr>
          </thead>
          <tbody>
            
            {sous_categories?.length > 0 ? 
              sous_categories.map((post, id)=> {
                return <SousCard key={id} sous_cat={post} />
              })
              : 'Pas de Sous Categorie'
              }
            
            
          </tbody>
        </table>
      </div>
    </div>

    {/* Modal Sous-Categorie */}
    <div className="modal fade" id="newFormat" tabIndex={-1} role="dialog" aria-labelledby="newFormatLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Sous-Categorie</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Nom
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nom' onChange={onChange} className="form-control" placeholder="Donnez le nom de la sous-categorie" required />
                  {/* <small>Field must contain a unique value</small> */}
                  {/* <div className="invalid-feedback">Please enter category.</div> */}
                </div>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Image
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" onChange={handleFileChange} className="form-control" required />
                  {/* <small>Field must contain a unique value</small> */}
                  {/* <div className="invalid-feedback">Please enter category.</div> */}
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
