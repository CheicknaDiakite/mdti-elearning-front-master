import React from 'react'
import { ancienMatiere } from '../../../../_services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function MatiereCard({type}) {
    const useQuery = useQueryClient();
    const mutation = useMutation({
        mutationFn: (type) => {
        return ancienMatiere.deleteMatiere(type)
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
        useQuery.invalidateQueries("Type");
        // toast.success("formations supprimée avec succès");
        },
    });
    const handleDelete = (type) => {
        mutation.mutate(type);
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
            
            <td>{type.nom}</td>
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
                    <Link to={`/admin/ancien_sujet/type/${type.id}`} className="dropdown-item" >
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </Link>
                    <button className="dropdown-item"onClick={()=>handleDelete(type)}>
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
