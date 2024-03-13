import React from 'react'
import useForma from '../../components/UseContext/useForma'
import { Link } from 'react-router-dom'
import { BASE } from '../../_services/caller.service'

export default function CourCard({post}) {

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
        
        
    </tr>
    </>
  )
}
