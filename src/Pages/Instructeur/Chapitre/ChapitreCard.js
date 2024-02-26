import React from 'react'
import { Link } from 'react-router-dom'
import { useChapitre } from '../../../components/UseContext/useForma'

export default function ChapitreCard({post}) {
    const {deleteChapitre}= useChapitre(post)
  return (
    <>
    <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            {/* <td onClick={() => window.open("https://google.com")} >#1060</td>  */}
            
            <td><Link to={`/dashboard/formation/video/${post.id}`}>{post.nom}</Link> </td>
            <td>
                <span className="badge bg-warning">Pending</span>
            </td>
            
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                    <span className="dropdown-header">Setting</span>
                    <Link to={`/dashboard/formation/chapitre/modif/${post.id}`} className="dropdown-item">
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </Link>
                    <button className="dropdown-item" onClick={()=>deleteChapitre(post)}>
                    <i className="fe fe-trash dropdown-item-icon" />
                    Remove
                    </button>
                </span>
                </span>
            </td>
            </tr>

        {/* Modal Video */}
        <div className="modal fade" id="newVideo" tabIndex={-1} role="dialog" aria-labelledby="newVideoLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Chapitre</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                
                <iframe
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="300"
                    height="200"
                    src="http://127.0.0.1:8000/formation/video/add/${post.id}">
                </iframe>
            
                <div>
                    <button type="submit" className="btn btn-primary">Add New Category</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    </>

    
  )
}
