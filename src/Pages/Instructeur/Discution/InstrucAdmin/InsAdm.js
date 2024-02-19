import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { discutionService } from '../../../../_services';
import FormationContext from '../../../../components/UseContext/formation.context';

export default function InsAdm({post}) {

    const {deleteFormation} = useContext(FormationContext)

    
  return (
    <>
        <div className="d-flex justify-content-end mb-4">
            {/* media */}
            <div className="d-flex w-lg-40">
            {/* media body */}
            <div className="me-3 text-end">
                <small>{post.date}</small>
                <div className="d-flex">
                <div className="me-2 mt-2">
                    {/* dropdown */}
                    <div className="dropdown dropstart">
                    <a className="text-link" href="#" role="button" id="dropdownMenuLinkTwo" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fe fe-more-vertical" />
                    </a>
                    {/* dropdown menu */}
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkTwo">
                        {/* <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon" />
                        Copy
                        </a> */}
                        {/* <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon" />
                        Edit
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fe fe-corner-up-right dropdown-item-icon" />
                        Reply
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fe fe-corner-up-left dropdown-item-icon" />
                        Forward
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fe fe-star dropdown-item-icon" />
                        Favourite
                        </a> */}
                        <button className="dropdown-item" onClick={()=>deleteFormation(post)}>
                        <i className="fe fe-trash dropdown-item-icon" />
                        Delete
                        </button>
                    </div>
                    </div>
                </div>
                {/* card */}
                <div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
                    {/* card body */}
                    <div className="card-body text-start p-3">
                    <p className="mb-0">{post.message}</p>
                    </div>
                </div>
                </div>
            </div>
            {/* img */}
            <img src="../../assets/images/avatar/avatar-1.jpg" alt className="rounded-circle avatar-md" />
            </div>
        </div>
    </>
  )
}
