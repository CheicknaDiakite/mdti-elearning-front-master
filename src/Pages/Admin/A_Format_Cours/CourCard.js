import React from 'react'

import { Link } from 'react-router-dom';
import { BASE } from '../../../_services/caller.service';
import { useCour } from '../../../components/UseContext/useForma';

export default function CourCard({cour, slug}) {
    const top = {        
        apprenant_id : cour.apprenant_id,
    }
    
    const {deleteCour} = useCour(cour.id)

    let url = BASE(cour.apprenant_avatar)
  return (
    <>
        {/* contact item */}
        <li className="py-3 px-4 chat-item contacts-item">
            {/* contact link */}
            <div className="d-flex justify-content-between align-items-center">
                {/* media */}
                <Link to={`/admin/formation/discution/${cour.apprenant_id}/${slug}`}>
                <div className="d-flex">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img src={url} alt className="rounded-circle" />
                    </div>
                    {/* media body */}
                    <div className="ms-2">
                    <h5 className="mb-0 fw-bold">{cour.apprenant_first_name} {cour.apprenant_last_name}</h5>
                    {/* <p className="mb-0 text-truncate">I m for unread message components...</p> */}
                    </div>
                </div>
                </Link>
                {/* <div>
                
                <small>8:48AM</small>
                <div className="text-end">
                    <span className="icon-shape icon-xs text-white bg-danger rounded-circle fw-bold fs-6">1</span>
                </div>
                </div> */}
            </div>
            {/* chat action */}
            <div className="chat-actions">
                {/* dropdown */}
                <div className="dropdown dropstart">
                <a href="#" className="btn btn-white btn-icon btn-sm rounded-circle primary-hover" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fe fe-more-horizontal fs-3" />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <button className="dropdown-item" onClick={()=>deleteCour(cour)}>
                        <i className="fe fe-trash dropdown-item-icon" />
                        Remove
                    </button>
                    
                </div>
                </div>
            </div>
        </li>
    </>
  )
}
