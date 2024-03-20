import React, { useState } from 'react'
import DocumentCard from './DocumentCard'
import useAnc_Type, { useAnc_Document, useAnc_Matiere, useAnc_Niveau, useAnc_Pays } from '../../../../components/UseContext/useAncien'

export default function Document() {
    const {documents, addDocument} = useAnc_Document()
    const {Type} = useAnc_Type()
    const {niveau} = useAnc_Niveau()
    const {matiere} = useAnc_Matiere()
    const {pays} = useAnc_Pays()

    const [base64Image, setBase64Image] = useState('');
    const [doc, setType] = useState([])
    const onChange = (e) => {
        setType({
            ...doc,
            [e.target.name]: e.target.value
        })
    }
    const handleMinChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
        setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
    };
    const handleDocChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
        setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(base64Image.includes("base64"))
        {
            doc['document'] = base64Image
        }else{
        delete doc['document']
        }

        if(base64Image.includes("base64"))
        {
            doc['miniature'] = base64Image
        }else{
        delete doc['miniature']
        }
    
        console.log("ff",doc)
        
        addDocument(doc);
      };
  return (
    <>
    <div className="card mb-4 mx-3 my-3">
        {/* Card header */}
        <div className="card-header border-bottom-0">
            <h3 className="h4 mb-3">Listes des Matieres</h3>
            <div className="row align-items-center">
            
            <div className="col-lg-2 col-md-6 text-lg-end">
                {/* Button */}
                <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newType">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

                </button>
            </div>
            </div>
        </div>
        {/* Table */}
        <div className="table-responsive">
            <table className="table mb-0 text-nowrap table-hover table-centered table-with-checkbox">
            <thead className="table-light">
                <tr>
                <th>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkAll" />
                    <label className="form-check-label" htmlFor="checkAll" />
                    </div>
                </th>
                
                <th>Nom</th>
                <th>Prix</th>
                <th>Année</th>
                
                
                <th />
                </tr>
            </thead>
            <tbody>
            {documents?.length > 0 ? 
            documents.map((post) => (
                <DocumentCard type={post} />
            ))
            : 'Pas de QCM'
            }            
                
            </tbody>
            
            </table>
            
        </div>
    </div>

    {/* Modal QCM*/}
    <div className="modal fade" id="newType" tabIndex={-1} role="dialog" aria-labelledby="newTypeLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Document</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
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
            <select class="form-select " name='type_id' onChange={onChange} aria-label="Default select example">
                <option selected>Choisissez un type</option>
                {Type?.length > 0 ? 
                Type.map((post) => (
                    <option value={post.id}>One</option>
                ))
                : 'Pas de Type'
                } 
            
            </select>
            </div>

            <div className="mb-3 mb-2">
            <select class="form-select " name='niveau_id' onChange={onChange} aria-label="Default select example">
                <option selected>Choisissez un type</option>
                {niveau?.length > 0 ? 
                niveau.map((post) => (
                    <option value={post.id}>One</option>
                ))
                : 'Pas de Type'
                } 
            
            </select>
            </div>

            <div className="mb-3 mb-2">

            <select class="form-select " name='matiere_id' onChange={onChange} aria-label="Default select example">
                <option selected>Choisissez un type</option>
                {matiere?.length > 0 ? 
                matiere.map((post) => (
                    <option value={post.id}>One</option>
                ))
                : 'Pas de Type'
                } 
            
            </select>
            </div>

            <div className="mb-3 mb-2">

            <select class="form-select " name='pays_id' onChange={onChange} aria-label="Default select example">
                <option selected>Choisissez un type</option>
                {pays?.length > 0 ? 
                pays.map((post) => (
                    <option value={post.id}>{post.nom}</option>
                ))
                : 'Pas de Type'
                } 
            
            </select>
            </div>

            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                prix
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='prix' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>

            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    annee
                    <span className="text-danger">*</span>
                </label>
                <input type="date" name='annee' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>

            <div class="mb-3">
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input class="form-control form-control-sm" onChange={handleDocChange} type="file"/>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input class="form-control form-control-sm" onChange={handleMinChange} type="file"/>
            </div>
            
            <div>
            <button type="submit" className="btn btn-primary">Add New Type</button>
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
