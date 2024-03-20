import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useExamen, useParticiper } from '../../../components/UseContext/useForma'
import ListCard from './ListCard'
import useUtilisateur from '../../../components/UseContext/useUtilisateur'

export default function ListExamen() {
    let {a_id, e_id, id} = useParams()
    const [point, setFormat] = useState([])
    const top = {
        apprenant_id : a_id,
        qcm_id : e_id
    }
    
    const {updatePartcip} = useParticiper()

    const onChange = (e) => {
      setFormat({
          ...point,
          [e.target.name]: e.target.value
      })
    }

    const {exam} = useExamen(top)
    
    const {user} = useUtilisateur(a_id)

    const onSubmit = (e) => {
      e.preventDefault();
  
      point["apprenant_id"]=a_id
      point["qcm_id"]=e_id
      point["id"]=id
  
      updatePartcip(point)
    };
    
  return (
    <>
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
        <h3 className="h4 mb-3">Pour ajouter le nombre de point que cet apprenant a eu</h3>
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
            {/* <input type="search" className="form-control" placeholder="Search Your Courses" /> */}
            <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newFormat">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

            </button>
          </div>
        
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
            <ListCard qcm={post} />
          ))
          : 'Pas de QCM'
          }            
            
        </tbody>
        </table>
        
    </div>
    </div>
    {/* Modal Formation*/}
    <div className="modal fade" id="newFormat" tabIndex={-1} role="dialog" aria-labelledby="newFormatLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Donnez le point total</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <form className="needs-validation" onSubmit={onSubmit}>
              
              <div className="mb-3 mb-2">
                <label className="form-label" htmlFor="title">
                  Point
                  <span className="text-danger">*</span>
                </label>
                <input type="number" name='point' onChange={onChange} className="form-control" placeholder="point" required />
                
              </div>
              
              
              <div>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Attribuer</button>
                
              </div>
            </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
