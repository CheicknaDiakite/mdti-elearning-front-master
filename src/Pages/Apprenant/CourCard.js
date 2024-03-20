import React from 'react'
import useForma, { useCour } from '../../components/UseContext/useForma'
import { Link } from 'react-router-dom'
import { BASE } from '../../_services/caller.service'

export default function CourCard({post}) {
    
    const {deleteCour} = useCour()

    let url = BASE(post.miniature)
  return (
    <>
    <tr>
        <td>
        <div className="d-flex align-items-center">
            <div>
            <Link to={`/formation/detail/${post.formation_slug}`}>
                <img src={url} alt="course" className="rounded img-4by3-lg" />
            </Link>
            </div>
            <div className="ms-3">
                <h4 className="mb-1 h5">
                    
                    <br/>
                    <a href="#" className="text-inherit">{post.formation_nom}</a>
                </h4>
            
            </div>
            
        </div>
        </td>   
        <td>
            <span className="dropdown dropstart">
            <Link className="btn-icon btn btn-ghost btn-sm rounded-circle" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                <i className="fe fe-more-vertical" />
            </Link>
            <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                {/* <span className="dropdown-header">Setting</span> */}
                <button className="dropdown-item" onClick={()=> deleteCour(post)}>
                    <i className="fe fe-trash dropdown-item-icon" />
                    Delete
                </button>
            </span>
            </span>
            </td>
        
    </tr>
    </>
  )
}
