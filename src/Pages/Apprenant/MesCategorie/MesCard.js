import React from 'react'
import { Link } from 'react-router-dom'
import { BASE } from '../../../_services/caller.service'
import { useSuive } from '../../../components/UseContext/useForma'

export default function MesCard({post}) {

  // console.log("hh", post.souscategorie_slug)
  const {deletesuive} = useSuive()
    
    let url = BASE(post.image)
  return (
    <>
    <tr>
      <td>
      <div className="d-flex align-items-center">
          <div>
          <Link to={`/formation/categorie/${post.souscategorie_id}`}>
              <img src={url} alt="course" className="rounded img-4by3-lg" />
          </Link>
          </div>
          <div className="ms-3">
          <h4 className="mb-1 h5">
              
              <br/>
              <a href="#" className="text-inherit">{post.souscategorie_nom}</a>
          </h4>
          
          </div>
      </div>
      </td>
      <td>
        <span className="dropdown dropstart">
          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
            <i className="fe fe-more-vertical" />
          </a>
          <span className="dropdown-menu" aria-labelledby="courseDropdown2">
            
            <button className="dropdown-item" onClick={() => deletesuive(post) }>
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
