import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ancienNiveau, ancienType } from '../../../../_services';
import toast from 'react-hot-toast';

export default function NiveauCard({niveau}) {
    const sluger = {
    "id": niveau.id
    }
    const [nom, setType] = useState([])
    const onChangeQcm = (e) => {
        setType({
            ...nom,
            [e.target.name]: e.target.value
        })
    }
    const useQuery = useQueryClient();
    const modif = useMutation({
        mutationFn: (niveau) => {
        return ancienNiveau.updateNiveau(niveau)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useQuery.invalidateQueries("Niveau");
        toast.success("niveau supprimée avec succès");
        },
    });

    
    const mutation = useMutation({
        mutationFn: (niveau) => {
        return ancienNiveau.deleteNiveau(niveau)
        .then(res => {
            if(res.data.etat!==true){
              toast.error(res.data.message);
            } 
          })
        },
        onError: (error) => {
        toast.error("Une erreur est survenue",error);
        },
        onSuccess: () => {
        useQuery.invalidateQueries("Niveau");
        // toast.success("formations supprimée avec succès");
        },
    });
    const handleDelete = (niveau) => {
        console.log("del",niveau)
        mutation.mutate(niveau);
      };

      const onSubmitQcm = (e) => {
        e.preventDefault();       
    
        // qc["formation_slug"]= slug
    
        // console.log("type ...",type)
        
        modif.mutate(nom);
      };
  return (
    <>
        <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td>{niveau.nom}</td>
            {/* <td>
                {type.description}
            </td> */}
            
            
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                    <span className="dropdown-header">Setting</span>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#newNodif">
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </a>
                    <button className="dropdown-item"onClick={()=>handleDelete(niveau)}>
                    <i className="fe fe-trash dropdown-item-icon" />
                    Remove
                    </button>
                </span>
                </span>
            </td>
        </tr>

        {/* Modal QCM*/}
        <div className="modal fade" id="newNodif" tabIndex={-1} role="dialog" aria-labelledby="newNodifLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Niveau Modif</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <form className="needs-validation" onSubmit={onSubmitQcm}>
                <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                        Nom
                        <span className="text-danger">*</span>
                    </label>
                    <input type="text" name='nom' onChange={onChangeQcm} className="form-control" placeholder="Write a Category" required />
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
        </div>
        </div> 
    </>
  )
}
