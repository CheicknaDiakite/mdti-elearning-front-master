import React from 'react'
import { useParticiper } from '../../../components/UseContext/useForma'
import { Link } from 'react-router-dom'

export default function ExamCard({examen}) {
    const {deletePartcip} = useParticiper(examen)
  return (
    <>
    <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td><Link to={`/admin/formation/examen/code/${examen.apprenant_id}/${examen.qcm_id}`}>{examen.apprenant_nom} {examen.apprenant_prenom}</Link></td>
            <td>
                <span className="badge bg-secondary">{examen.qcm_nom}</span>
            </td>
            <td>
                <span className="badge bg-info">{examen.point=== null ? "Pas encore corrigé..." : examen.point}</span>
            </td>
           
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                    {/* <span className="dropdown-header">Setting</span> */}
                    <a className="dropdown-item" href="#">
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </a>
                    <button className="dropdown-item" onClick={()=> deletePartcip(examen)}>
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
