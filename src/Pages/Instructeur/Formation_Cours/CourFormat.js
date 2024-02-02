import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

import toast from 'react-hot-toast';
import { courService } from '../../../_services';
import CourCard from './CourCard';


export default function CourFormat({slug, user}) {
     // pour ajouter
     const [post, setCour] = useState([])
    const [delet, setPosts] = useState([]);

     const onChangeCour = (e) => {
         setCour({
             ...post,
             [e.target.name]: e.target.value
         })
     }
     // fin
     const useText = useQueryClient();

     const del = useMutation({
        mutationFn: (post) => {
        return courService.deleteCour(post)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
            useText.invalidateQueries("publications");
        toast.success("Publication supprimée avec succès");
        },
    });

    const mutation = useMutation({
        mutationFn: (post) => {
        return courService.addCour(post)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        
        useText.invalidateQueries("cours");
        toast.success("Publication ajoutée avec succès");
        //   navigate('/admin/categorie/index')
        },
    });
    // pour la recuperetion
    const top = {
        formation_slug : slug,
      }
    const {
        data: cour,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["cours"],
        queryFn: () =>
          courService.allCour(top)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const cours = cour.donnee;
      console.log("ourssss",cours)
    //   fin

    const onSubmitCour = (e) => {
        e.preventDefault();
    
        post["formation_slug"]=slug
        post["apprenant_id"]=user
        
        mutation.mutate(post)
    
    };

    
    const handleDelete = (post) => {
        del.mutate(post);
      };
   
  return (
    <>
    <div className="bg-white border-end border-top vh-100">
    {/* chat list */}
    <div className="chat-window">
        <div className="chat-sticky-header sticky-top bg-white">
        <div className="px-4 pt-3 pb-4">
            {/* heading */}
            <div className="d-flex justify-content-between align-items-center">
            <div>
                <h1 className="mb-0 fw-bold h2">Chat</h1>
            </div>
            
            </div>
        
            {/* User chat */}
            <div className="d-flex justify-content-between align-items-center">
            {/* media */}
            
            </div>
        </div>
        {/* nav tabs*/}
        <ul className="nav nav-line-bottom" id="tab" role="tablist">
            {/* nav item */}
            <li className="nav-item">
            <a className="nav-link active py-2" id="recent-tab" data-bs-toggle="pill" href="#recent" role="tab" aria-controls="recent" aria-selected="true">Message de discution</a>
            </li>
            
        </ul>
        </div>
        <div data-simplebar style={{height: '100vh', overflow: 'auto'}}>
        {/* tab content */}
        <div className="tab-content">
            {/* tab pane */}
            <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="recent-tab">
            {/* contact list */}
            <ul className="list-unstyled contacts-list">

            {cours?.length > 0 ? 
                cours.map((post, id)=> {
                    return <CourCard key={id} cour={post} slug={slug}/>
                })
            : 'Pas de cours'
            }
                
            </ul>
            </div>
            
        </div>
        </div>
    </div>
    </div>


    {/* Modal Cour*/}
    <div className="modal fade" id="newCour" tabIndex={-1} role="dialog" aria-labelledby="newCourLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Cour</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form className="needs-validation" onSubmit={onSubmitCour}>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    montant
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='montant' onChange={onChangeCour} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            {/* <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Durée
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='duree' onChange={onChangeCour} className="form-control" placeholder="Write a Category" required />
                <small>Field must contain a unique value</small>
                <div className="invalid-feedback">Please enter category.</div>
            </div>
            <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                    Description
                    <span className="text-danger">*</span>
                </label>
                <input type="text" name='description' onChange={onChangeCour} className="form-control" placeholder="Write a Category" required />
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
