import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { BASE } from '../../../_services/caller.service';

import FormationContext from '../../../components/UseContext/formation.context';

export default function CategorieCard({categorie}) {
    
    
    const { deleteFormation } = useContext(FormationContext)
      
    let url = BASE(categorie.image)
    // console.log("categorie",url)

  return (
    <>
    <tr>
        <td>
        <div className="d-flex align-items-center">
            <div>
            <Link to={`/admin/formation/sous-categorie/${categorie.slug}`}>
                <img src={url} alt="course" className="rounded img-4by3-lg" />
            </Link>
            </div>
            <div className="ms-3">
            <h4 className="mb-1 h5">
                <a href="#" className="text-inherit">{categorie.nom}</a>
            </h4>
            </div>
        </div>
        </td>
        
        <td >
        <span className="dropdown dropstart">
            <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
            <i className="fe fe-more-vertical" />
            </a>
            <span className="dropdown-menu" aria-labelledby="courseDropdown1">
            <span className="dropdown-header">Setting</span>
            <Link to={`/admin/formation/categorie/${categorie.id}`} className="dropdown-item" >
                <i className="fe fe-edit dropdown-item-icon" />
                Edit
            </Link>
            <button className="dropdown-item" onClick={()=>deleteFormation(categorie)}>
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
