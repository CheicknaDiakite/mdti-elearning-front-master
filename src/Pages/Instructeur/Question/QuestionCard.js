import React from 'react';
import { Link } from 'react-router-dom';
import { useQuestion } from '../../../components/UseContext/useForma';

export default function QuestionCard({question}) {

  const { deleteQuestion } = useQuestion(question)
    
  return (
    <>
        <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td><Link to={`/dashboard/formation/reponse/${question.id}`}>{question.question}</Link></td>
            <td>
                <span className="badge bg-warning">{question.point}</span>
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
                    <button className="dropdown-item" onClick={()=>deleteQuestion(question)}>
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
