import React from 'react'
import { Link } from 'react-router-dom'


export default function CardChapitre({categorie}) {

    
    
  return (
    <>
    
        <tr className="accordion-toggle collapsed" id="accordion1" data-bs-toggle="collapse" data-bs-parent="#accordion1" data-bs-target="#collapseOne">
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="categoryCheck1" />
                <label className="form-check-label" htmlFor="categoryCheck1" />
                </div>
            </td>
            
            <td>{categorie.nom}</td>
            <td><img src={`http://127.0.0.1:8000/${categorie.image}`} alt="" class="img-4by3-lg rounded" /></td>
            {/* <td>16 Oct, 2020</td>
            <td>16 Nov, 2020</td> */}
            <td>
                <span className="badge bg-success">ok</span>
            </td>
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="courseDropdown1">
                    <span className="dropdown-header">Action</span>
                    {/* <a className="dropdown-item" href="#">
                    <i className="fe fe-send dropdown-item-icon" />
                    Publish
                    </a> */}
                    <Link to={`/admin/categorie/edit/${categorie.id}`} className="dropdown-item" > 
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </Link>
                    <button className="dropdown-item">
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
