import React, { useState } from 'react'
import { ancienType } from '../../../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import TypeCard from './TypeCard';
import toast from 'react-hot-toast';

export default function Type() {
    // const sluger = {
    //     "formation_slug": slug
    //   }
    const [type, setType] = useState([])
    const onChangeQcm = (e) => {
        setType({
            ...type,
            [e.target.name]: e.target.value
        })
    }

    const useChap = useQueryClient();
    const mutation = useMutation({
        mutationFn: (type) => {
        return ancienType.addType(type)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useChap.invalidateQueries("Type");
        toast.success("Type supprimée avec succès");
        },
    });

      const {
        data: Type,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["Type"],
        queryFn: () =>
        ancienType.allType()
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const types = Type.donnee
      

      const onSubmitQcm = (e) => {
        e.preventDefault();       
    
        // qc["formation_slug"]= slug
    
        // console.log("type ...",type)
        
        mutation.mutate(type);
      };
  return (
    <>
    <div className="card mb-4 mx-3 my-3">
        {/* Card header */}
        <div className="card-header border-bottom-0">
            <h3 className="h4 mb-3">Listes des Types</h3>
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
                {/* <th>Description</th> */}
                
                <th />
                </tr>
            </thead>
            <tbody>
            {types?.length > 0 ? 
            types.map((post) => (
                <TypeCard type={post} />
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
