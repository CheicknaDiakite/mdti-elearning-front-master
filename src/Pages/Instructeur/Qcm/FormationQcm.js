
import React, { useState } from 'react'
import { qcmService } from '../../../_services';
import FormaCardQCM from './FormaCardQCM';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import FormationCardQcm from './FormationCardQcm';



export default function FormationQcm({slug}) {
    const sluger = {
        "formation_slug": slug
    }
    // Pour la recuperation de la clé etranger (QCM)
    
    const [qc, setQc] = useState([])
    
    const onChangeQcm = (e) => {
        setQc({
            ...qc,
            [e.target.name]: e.target.value
        })
    }

    const useChap = useQueryClient();
    const mutation = useMutation({
        mutationFn: (qc) => {
        return qcmService.addQcm(qc)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useChap.invalidateQueries("formaQcm");
        toast.success("formations supprimée avec succès");
        },
    });

  const {
    data: formaQcm,
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["formaQcm"],
    queryFn: () =>
    qcmService.allQcm(sluger)
      .then((res) => res.data),
    onerror: (error) => console.log(error),
  });
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const qcms = formaQcm.donnee;

  const onSubmitQcm = (e) => {
    e.preventDefault();       

    qc["formation_slug"]= slug

    // console.log(qc)
    
    mutation.mutate(qc);
  };
  // fin
  return (
    <>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes des QCM</h3>
        <div className="row align-items-center">
       
        
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
            <th>Description</th>
            <th>Date</th>
            <th />
            </tr>
        </thead>
        <tbody>
        {qcms?.length > 0 ? 
          qcms.map((post) => (
            <FormationCardQcm qcm={post} slug={slug} />
          ))
          : 'Pas de QCM'
          }            
            
        </tbody>
        </table>
        
    </div>
    </div>

    {/* Modal QCM*/}
    <div className="modal fade" id="newQcm" tabIndex={-1} role="dialog" aria-labelledby="newQcmLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New QCM</h4>
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
            <div className="mb-3 mb-2">
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
