import React from 'react'
import CardExamen from './CardExamen'
import { useParticiper } from '../../../components/UseContext/useForma'

export default function Examen() {
    

    const {participers} = useParticiper()

    console.log("aqw",participers)
  return (
    <>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes de ceux qui participe a l'Examen</h3>
        {/* <div className="row align-items-center">
        
        <div className="col-lg-2 col-md-6 text-lg-end">
            
            <button className="btn btn-outline-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#newQuestion">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
        </div>
        </div> */}
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
            
            <th>Nom</th>
            <th>Nom du QCM</th>
            
            <th />
            </tr>
        </thead>
        <tbody>
        {participers?.length > 0 ? 
          participers.map((post) => (
            <CardExamen examen={post} />
          ))
          : 'Pas de QCM'
          }            
            
        </tbody>
        </table>
        
    </div>
    </div>
    </>
  )
}
