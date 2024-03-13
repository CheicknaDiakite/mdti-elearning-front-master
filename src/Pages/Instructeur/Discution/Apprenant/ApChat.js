import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { discutionService } from '../../../../_services';
import toast from 'react-hot-toast';
import FormationContext from '../../../../components/UseContext/formation.context';

export default function ApChat({post}) {
    const {deleteFormation} = useContext(FormationContext)
  return (
    <>
        <div className="d-flex w-lg-40 mb-4">
            <img src="../../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle avatar-md" />
            {/* media body */}
            <div className="ms-3">
            <small>sharad bb , 09:42</small>
            <div className="d-flex">
                <div className="card mt-2 rounded-top-md-left-0">
                <div className="card-body p-3">
                    <p className="mb-0 text-dark">{post.message}</p>
                </div>
                </div>
                <div className="ms-2 mt-2">
                {/* dropdown */}
                {/* <div className="dropdown dropend">
                    <a className="text-link" href="#" role="button" id="dropdownMenuLinkThree" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkThree">
                    
                    <button className="dropdown-item" onClick={()=>deleteFormation(post)}>
                        <i className="fe fe-trash dropdown-item-icon" />
                        Delete
                    </button>
                    </div>
                </div> */}
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
