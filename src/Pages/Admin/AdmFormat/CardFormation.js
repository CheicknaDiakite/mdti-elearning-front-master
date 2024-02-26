import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { accountService, sousCatService } from '../../../_services';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE } from '../../../_services/caller.service';
import FormationContext from '../../../components/UseContext/formation.context';

export default function CardFormation({formation}) {
  
  const { deleteFormation } = useContext(FormationContext)
  
  let url = BASE(formation.miniature)

  return (
    <>
       {formation.ajout_terminer===true && <>
        <tr>
        <td>
        <div className="d-flex align-items-center">
            <div>
            <Link to={`/admin/formation/chapitre-qcm/${formation.slug}`}>
                <img src={url} alt="course" className="rounded img-4by3-lg" />
            </Link>
            </div>
            <div className="ms-3">
            <h4 className="mb-1 h5">
                
                <br/>
                <a href="#" className="text-inherit">{formation.nom}</a>
            </h4>
            
            </div>
        </div>
        </td>
        <td>
            {formation.publier===true ? <span className="badge bg-info">Yes</span> : formation.ajout_terminer===true && <span className="badge bg-warning">No ...</span>}
        </td>
    
        {/* <CatForma formation={formation.sous_categorie_slug} /> */}
        <td>

        <span className="dropdown dropstart">
            <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
            <i className="fe fe-more-vertical" />
            </a>
            <span className="dropdown-menu" aria-labelledby="courseDropdown1">
            <span className="dropdown-header">Setting</span>
            <Link className="dropdown-item" to={`/admin/formation/edit/${formation.slug}`}>
                <i className="fe fe-edit dropdown-item-icon"></i>
                Edit
            </Link>
            <button className="dropdown-item" onClick={()=>deleteFormation(formation)}>
                <i className="fe fe-trash dropdown-item-icon" />
                Remove
            </button>
            </span>
        </span>
        
        </td>
    </tr> 
        </>}
       
      

        
    </>
  )
}
