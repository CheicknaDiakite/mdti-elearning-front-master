import React from 'react'
import { Link } from 'react-router-dom'

export default function ListCard({qcm}) {
  return (
    <>
    <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td> {qcm.nom}</td>
            <td>
                {qcm.point}
            </td>
            <td>
                {qcm.reponse}
            </td>
            <td>
                {qcm.correct ? "true" : "false"}
            </td>
            
            <td>{qcm.date}</td>
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
                    <a className="dropdown-item" href="#">
                    <i className="fe fe-trash dropdown-item-icon" />
                    Remove
                    </a>
                </span>
                </span>
            </td>
    </tr>
    </>
  )
}
