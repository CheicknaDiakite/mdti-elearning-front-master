import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormationContext from '../../../components/UseContext/formation.context'

export default function FormaCardQCM({qcm}) {
    // console.log("qccmm",qcm)
    const { deleteQCM } = useContext(FormationContext)
  return (
    <>
        <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td><Link to={`/dashboard/formation/question/${qcm.id}`}>{qcm.nom}</Link></td>
            <td>
                {qcm.description}
            </td>
            
            
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                    <span className="dropdown-header">Setting</span>
                    <a className="dropdown-item" href="#">
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </a>
                    <button className="dropdown-item" onClick={()=>deleteQCM(qcm)}>
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
