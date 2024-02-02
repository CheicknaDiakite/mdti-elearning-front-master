import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';


export default function SousCard({sous_cat}) {
    const useQuery = useQueryClient();
    const mutation = useMutation({
        mutationFn: (sous_cat) => {
        return axios.post(`http://localhost:8000/formation/sous-categorie/del`,sous_cat);
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useQuery.invalidateQueries("sousCategories");
        toast.success("SousCategorie supprimée avec succès");
        },
    });
    const handleDelete = (sous_cat) => {
        mutation.mutate(sous_cat);
      };
  return (
    <>
    <tr>
        <td>
        <div className="d-flex align-items-center">
            <div>
            
                <img src={`http://127.0.0.1:8000/${sous_cat.image}`} alt="course" className="rounded img-4by3-lg" />
            
            </div>
            <div className="ms-3">
            <h4 className="mb-1 h5">
                <a href="#" className="text-inherit">{sous_cat.nom}</a>
            </h4>
            
            </div>
        </div>
        </td>
        
        <td>
        <span className="dropdown dropstart">
            <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
            <i className="fe fe-more-vertical" />
            </a>
            <span className="dropdown-menu" aria-labelledby="courseDropdown1">
            <span className="dropdown-header">Setting</span>
            <a className="dropdown-item" href="#">
                <i className="fe fe-edit dropdown-item-icon" />
                Edit
            </a>
            <button className="dropdown-item" onClick={()=>handleDelete(sous_cat)}>
                <i className="fe fe-trash dropdown-item-icon" />
                Remove
            </button>
            </span>
        </span>
        </td>
    </tr>
    </>
  )
}
