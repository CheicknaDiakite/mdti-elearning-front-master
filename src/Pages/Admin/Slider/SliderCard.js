import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { BASE } from '../../../_services/caller.service';
import { Link } from 'react-router-dom';
import { useSlider } from '../../../components/UseContext/useForma';

export default function SliderCard({slider}) {

    const {deleteSlider} = useSlider(slider)
    
    let url = BASE(slider.image)
  return (
    <>
    <tr>
        <td>
        <div className="d-flex align-items-center">
            <div>
            <Link to={`/admin/formation/sous-categorie/${slider.slug}`}>
                <img src={url} alt="course" className="rounded img-4by3-lg" />
            </Link>
            </div>
            <div className="ms-3">
            <h4 className="mb-1 h5">
                <a href="#" className="text-inherit">{slider.nom}</a>
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
            {/* <a className="dropdown-item" href="#">
                <i className="fe fe-edit dropdown-item-icon" />
                Edit
            </a> */}
            <button className="dropdown-item" onClick={()=>deleteSlider(slider)}>
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
