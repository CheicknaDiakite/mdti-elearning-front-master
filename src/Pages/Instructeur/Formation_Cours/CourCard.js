import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { courService } from '../../../_services';
import toast from 'react-hot-toast';

import { Link } from 'react-router-dom';

export default function CourCard({cour, slug}) {
    const top = {        
        apprenant_id : cour.apprenant_id,
    }
    const useText = useQueryClient();

    const del = useMutation({
       mutationFn: (cour) => {
       return courService.deleteCour(cour)
       },
       onError: (error) => {
       toast.error("Une erreur est survenue0");
       },
       onSuccess: () => {
        useText.invalidateQueries("cours");
       toast.success("cours supprimée avec succès");
       },
   });
    const handleDelete = (cour) => {
        del.mutate(cour);
      };
  return (
    <>
        {/* contact item */}
        <li className="py-3 px-4 chat-item contacts-item">
            {/* contact link */}
            <div className="d-flex justify-content-between align-items-center">
                {/* media */}
                <Link to={`/dashboard/formation/discution/${cour.apprenant_id}/${slug}`}>
                <div className="d-flex">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img src={`http://127.0.0.1:8000/${cour.apprenant_avatar}`} alt className="rounded-circle" />
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
                    <a className="dropdown-item" href="#">
                    <i className="bi-pin-angle dropdown-item-icon" />
                    Pin
                    </a>
                    <a className="dropdown-item" href="#">
                    <i className="bi-person-x dropdown-item-icon" />
                    Mute
                    </a>
                    <a className="dropdown-item" href="#">
                    <i className="bi-eye-slash dropdown-item-icon" />
                    Hide
                    </a>
                    <a className="dropdown-item" href="#">
                    <i className="bi-person-plus dropdown-item-icon" />
                    Add to Favorite
                    </a>
                </div>
                </div>
            </div>
        </li>
    </>
  )
}
