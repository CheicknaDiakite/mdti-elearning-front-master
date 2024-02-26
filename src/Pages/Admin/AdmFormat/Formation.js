import React, { useContext, useState } from 'react'

import CardFormation from './CardFormation';

import FormationContext from '../../../components/UseContext/formation.context';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formationService } from '../../../_services';
import toast from 'react-hot-toast';

export default function Formation() {

  const { user,formations,sous_categories } = useContext(FormationContext)  
  const [search, setSearch] = useState("");

  const [format, setFormat] = useState([])
  const [base64Image, setBase64Image] = useState('');
  const [sous_categorie_slug, setSouscat] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onChange = (e) => {
    setFormat({
        ...format,
        [e.target.name]: e.target.value
    })
  }

  const handleSearch = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearch(value)
  }
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

  const onSubmit = (e) => {
    e.preventDefault();

    format["miniature"]=base64Image
    format["instructeur_id"]=user
    format["sous_categorie_slug"]=sous_categorie_slug

    mutation.mutate(format)

  };

  return (
    <>      
     
      {/* Container fluid */}
      <section className="container-fluid p-4">
        <div className="row">
          {/* Page Header */}
          <div className="col-lg-12 col-md-12 col-12">
            <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">Liste des formations</h1>
                {/* Breadcrumb */}
                
              </div>
              <div>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newFormat">Add New Category</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            {/* Card */}
            <div className="card mb-4">
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
              <div className="table-responsive border-0 overflow-y-hidden">
                <table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
                  <thead className="table-light">
                  <tr>
                    <th>Formation</th>
                    
                    <th>Status (Publier/Non)</th>
                    <th />
                  </tr>
                  </thead>
                  <tbody>
     
                
                  {
                  formations
                  .filter((val) => {
                    return val.nom.toLowerCase().includes(search.toLowerCase());
                  }).map((formation) => {
                    return <CardFormation formation={formation} />
                  })}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  {sous_categories?.map((post) => (
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
