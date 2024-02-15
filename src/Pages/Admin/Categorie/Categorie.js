import React, { useContext, useState } from 'react'
import CategorieCard from './CategorieCard'
import { categorieService } from '../../../_services';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import EditorJsComponent from '../../../components/Editor';
import FormationContext from '../../../components/UseContext/formation.context';

export default function Categorie() {

  const {categories}= useContext(FormationContext)
    
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
  
  // pour l'ajout des categories
  const useText = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => {
      return categorieService.addCategorie(data)
    },
    onError: (error) => {
      toast.error("Une erreur est survenue0");
    },
    onSuccess: () => {
      
      useText.invalidateQueries("categories");
      toast.success("Publication ajoutée avec succès");
    //   navigate('/admin/categorie/index')
    },
  });

  // fin ajout
  const onSubmit = (e) => {
    e.preventDefault();

    if(base64Image.includes("base64"))
    {
      nom["image"] = base64Image
    }else{
      delete nom["image"]
    }
    // nom["image"]=base64Image
    mutation.mutate(nom)
  };
  return (
    <>
    {/* Categorie */}
    <div className="card mb-4">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Categorie</h3>
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
        </div>
      </div>
      {/* Table */}
      <div className="table-responsive overflow-y-hidden">
        <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
          <thead className="table-light">
            <tr>
              <th>Categorie</th>
             
              <th />
            </tr>
          </thead>
          <tbody>
            
            {categories?.length > 0 ? 
              categories.map((post)=> {
                return <CategorieCard categorie={post} />
              })
              : 'Pas de Categorie'
              }    
            
          </tbody>
        </table>
      </div>
    </div>

    {/* Modal Categorie*/}
    <div className="modal fade" id="newFormat" tabIndex={-1} role="dialog" aria-labelledby="newFormatLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Categorie</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <form className="needs-validation" onSubmit={onSubmit}>
                  <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                      Nom
                      {/* <span className="text-danger">*</span> */}
                    </label>
                    
                    <input type="text" name='nom' onChange={onChange} className="form-control" placeholder="Donnez le nom de le categorie" required />
                    {/* <small>Field must contain a unique value</small>
                    <div className="invalid-feedback">Please enter category.</div> */}
                  </div>
                  <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                      Image
                      {/* <span className="text-danger">*</span> */}
                    </label>
                    <input type="file" onChange={handleFileChange} className="form-control" required />
                    {/* <small>Field must contain a unique value</small>
                    <div className="invalid-feedback">Please enter category.</div> */}
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary">Add New Category</button>
                    <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
                  </div>

                  

            </form>
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}
