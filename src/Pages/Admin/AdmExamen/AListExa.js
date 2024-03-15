import React from 'react'
import { useParams } from 'react-router-dom'
import { useExamen } from '../../../components/UseContext/useForma'
import useUtilisateur from '../../../components/UseContext/useUtilisateur'
import AListCard from './AListCard'

export default function AListExa() {
    let {a_id, e_id} = useParams()
    const top = {
        apprenant_id : a_id,
        qcm_id : e_id
    }

    const {exam} = useExamen(top)
    
    const {user} = useUtilisateur(a_id)
  return (
    <>
    <section className="container-fluid p-4">
    <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            <div className="p-4">
              <span className="fs-6 text-uppercase text-primary fw-semibold">Nom de l'apprenant = {user.last_name} {user.first_name} </span> <br/>
              
              <span className="fs-6 fw-semibold">le nombre de quetion de de son examen </span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">{exam?.length}</h2>
              {/* <span className="d-flex justify-content-between align-items-center">
                <span>New this month</span>
                <span className="badge bg-info ms-2">120+</span>
              </span> */}
            </div>
          </div>
    </div>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes des QCM</h3>
        <div className="row align-items-center">
       
        
        </div>
    </div>
    {/* Table */}
    <div className="table-responsive">
        <table className="table mb-0 text-nowrap table-hover table-centered table-with-checkbox">
        <thead className="table-light">
            <tr>
            <th>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkAll" />
                <label className="form-check-label" htmlFor="checkAll" />
                </div>
            </th>
            
            <th>Question</th>
            <th>Point</th>
            <th>Reponse</th>
            <th>Correct</th>
            <th>Date</th>
            <th />
            </tr>
        </thead>
        <tbody>
        {exam?.length > 0 ? 
          exam.map((post) => (
            <AListCard qcm={post} />
          ))
          : 'Pas de QCM'
          }            
            
        </tbody>
        </table>
        
    </div>
    </div>
    </section>
    </>
  )
}
