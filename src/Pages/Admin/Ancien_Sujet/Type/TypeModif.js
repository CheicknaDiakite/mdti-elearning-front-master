import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useAnc_Type from '../../../../components/UseContext/useAncien';

export default function TypeModif() {
    let {id} = useParams()
    console.log(id)
    const [type, setType] = useState([])

    const {Ty: typ, updateType} = useAnc_Type(id)    
    
    const onChangeQcm = (e) => {
        setType({
            ...type,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmitQcm = (e) => {
        e.preventDefault();       
    
        updateType(type);
      };
  return (
    <>
    <div className="modal-content mx-5 py-5">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Type</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form className="needs-validation" onSubmit={onSubmitQcm}>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Nom
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='nom' onChange={onChangeQcm} className="form-control" placeholder={typ.nom} required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            {/* <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Durée
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='duree' onChange={onChangeQcm} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Description
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='description' onChange={onChangeQcm} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div> */}
            
            <div>
            <button type="submit" className="btn btn-primary">Add New Type</button>
            <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
            </div>
        </form>
        </div>
        </div>
    </>
  )
}
