import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import { ancienType } from '../../../../_services';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function TypeModif() {
    let {id} = useParams()
    console.log(id)
    const [type, setType] = useState([])
    const [typ, setTyp] = useState([])
    const flag = useRef(false)

    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            ancienType.getType(id)
          .then(res => {
            if(res.data.etat===true){
    
              console.log("typreee",res.data.donnee)
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[id]);

    console.log(typ)

    const onChangeQcm = (e) => {
        setType({
            ...type,
            [e.target.name]: e.target.value
        })
    }
    const useChap = useQueryClient();
    const mutation = useMutation({
        mutationFn: (type) => {
        return ancienType.updateType(type)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useChap.invalidateQueries("Type");
        toast.success("Type supprimée avec succès");
        },
    });
    const onSubmitQcm = (e) => {
        e.preventDefault();       
    
        // qc["formation_slug"]= slug
    
        // console.log("type ...",type)
        
        mutation.mutate(type);
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
