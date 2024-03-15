import React from 'react'
import { accountService } from '../../_services'
import { useCour } from '../../components/UseContext/useForma'
import CourCard from './CourCard'


export default function Cour() {

    const user = accountService.getToken()

    const top = {
        "apprenant_id": user,
    }

    const {cours} = useCour(top)
    

  return (
    <>
    <div className="col-lg-9 col-md-8 col-12">
      <div className="row">
        
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            <div className="p-4">
              <span className="fs-6 text-uppercase fw-semibold">Le nombre formation que tu as acheter</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">{cours?.length}</h2>
              {/* <span className="d-flex justify-content-between align-items-center">
                <span>New this month</span>
                <span className="badge bg-info ms-2">120+</span>
              </span> */}
            </div>
          </div>
        </div>
        
      </div>
     
      <div className="card mb-4">
        {/* Card header */}
        <div className="card-header">
          <h3 className="h4 mb-0">Best Selling Courses</h3>
        </div>
        {/* Table */}
        <div className="table-responsive">
          <table className="table mb-0 table-hover table-centered text-nowrap">
            {/* Table Head */}
            <thead className="table-light">
            <tr>
              <th>Formation</th>
              
              
              <th />
            </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {cours?.map((post) => {
                    return <CourCard post={post} />
                })}
              
            </tbody>
          </table>
        </div>
      </div>

    </div>

    </>
  )
}
