import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { questionService } from '../../../_services';

export default function QuestionCard({question}) {
    
    const useQuery = useQueryClient();
    const mutation = useMutation({
        mutationFn: (question) => {
        return questionService.deleteQuestion(question)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useQuery.invalidateQueries("question");
        toast.success("formations supprimée avec succès");
        },
    });
    const handleDelete = (question) => {
        mutation.mutate(question);
      };
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
                    <button className="dropdown-item" onClick={()=>handleDelete(question)}>
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
