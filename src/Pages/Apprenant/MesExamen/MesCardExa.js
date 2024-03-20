import React, { useContext } from 'react'
import { useParticiper } from '../../../components/UseContext/useForma'
import FormationContext from '../../../components/UseContext/formation.context'
import { Link } from 'react-router-dom'

export default function MesCardExa({examen}) {
    const {deletePartcip} = useParticiper(examen)
    const {user} = useContext(FormationContext)
  return (
    <>
    {examen.apprenant_id.toString() === user.toString() && <>
    
    <tr>
        
        <td>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="withdrawTwo" />
            <label className="form-check-label" htmlFor="withdrawTwo" />
            </div>
        </td>
        
        <td>{examen.apprenant_nom} {examen.apprenant_prenom}</td>
        <td>
            <span className="badge bg-primary">{examen.qcm_nom}</span>
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
                <button className="dropdown-item" onClick={()=> deletePartcip(examen)}>
                    <i className="fe fe-trash dropdown-item-icon" />
                    Delete
                </button>
            </span>
            </span>
        </td>
    </tr>
    </>}
    </>
  )
}
