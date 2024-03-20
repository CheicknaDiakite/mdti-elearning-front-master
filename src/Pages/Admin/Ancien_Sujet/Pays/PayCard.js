import React from 'react'
import { ancienMatiere } from '../../../../_services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAnc_Matiere, useAnc_Pays } from '../../../../components/UseContext/useAncien';

export default function PayCard({type}) {
    
    const {deletePay} = useAnc_Pays()
    
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
                    <button className="dropdown-item"onClick={()=>deletePay(type)}>
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
