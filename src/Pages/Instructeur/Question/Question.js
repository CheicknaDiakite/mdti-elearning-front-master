
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import QuestionCard from './QuestionCard';

import { useQuestion } from '../../../components/UseContext/useForma';

export default function Question() {
  // pour l'envoye du formulaire
  let {id} = useParams()
  const [nom, setName] = useState([]);
  // const [qcms, setQcms] = useState([]);
  console.log(id)

  const slug = {
    qcm_id: id
  }
  const { questions, addQuestion, isLoading} = useQuestion(slug)
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  

  const onChange = (e) => {
  setName({
    ...nom,
    [e.target.name]: e.target.value
  })
  }
  // fin
  const onSubmit = (e) => {
    e.preventDefault();       

    nom["qcm_id"]= id

    console.log("eee",nom)
    
    addQuestion(nom);
  };
  return (
    <>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes des Questions</h3>
        <div className="row align-items-center">
        
        <div className="col-lg-2 col-md-6 text-lg-end">
            {/* Button */}
            <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newQuestion">
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
            <th>Status</th>
            
            <th />
            </tr>
        </thead>
        <tbody>
        {questions?.length > 0 ? 
          questions.map((post) => (
            <QuestionCard question={post} />
          ))
          : 'Pas de QCM'
          }            
            
        </tbody>
        </table>
        
    </div>
    </div>
    

    {/* Modal QCM*/}
    <div className="modal fade" id="newQuestion" tabIndex={-1} role="dialog" aria-labelledby="newQuestionLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Question</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form className="needs-validation" onSubmit={onSubmit}>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    question
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='question' onChange={onChange} className="form-control" placeholder="Question" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    point
                    <span className="text-danger">*</span>
                </label>
                <input type="number" name='point' onChange={onChange} className="form-control" placeholder="Le point" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            {/* <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Description
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='description' onChange={onChange} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div> */}
            
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
