import React, { useEffect, useState } from 'react'
import { formationChapitre } from '../../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ChapitreCard from './ChapitreCard';

export default function AjoutChapitre({slug}) {

    const [chap, setchap] = useState([])
    const onChange = (e) => {
        setchap({
            ...chap,
            [e.target.name]: e.target.value
        })
    }
    const sluger = {
    "formation_slug": slug
    }

    const useChap = useQueryClient();
    const mutation = useMutation({
        mutationFn: (chap) => {
        return formationChapitre.addChapitre(chap)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useChap.invalidateQueries("chap");
        toast.success("formations supprimée avec succès");
        },
    });

      const {
        data: chapitre,
        // error,
        isLoading,
      } = useQuery({
        queryKey: ["chap"],
        queryFn: () =>
        formationChapitre.allChapitre(sluger)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const chapitres = chapitre.donnee;

      const onSubmit = (e) => {
        e.preventDefault();
        
        chap["formation_slug"]= slug
    
        mutation.mutate(chap);
      };
  return (
    <>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes des chapitres</h3>
        <div className="row align-items-center">
        
        <div className="col-lg-2 col-md-6 text-lg-end">
            {/* Button */}
            <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newCatgory">
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
            {/* <th>ID</th> */}
            <th>Nom</th>
            <th>Status</th>
            
            <th />
            </tr>
        </thead>
        <tbody>
        {chapitres?.length > 0 ? 
          chapitres.map((post)=> (
            <ChapitreCard post={post} />
          ))
        : 'Pas de chapitre'
        }
            
            
        </tbody>
        </table>
        
    </div>
    </div>

    {/* Modal Chapitre */}
    <div className="modal fade" id="newCatgory" tabIndex={-1} role="dialog" aria-labelledby="newCatgoryLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Chapitre</h4>
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
