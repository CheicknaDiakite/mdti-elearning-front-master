import React, { useContext, useEffect, useRef, useState } from 'react'
import { formationService, sousCatService } from '../../../_services';
import CardFormation from './CardFormation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import FormationContext from '../../../components/UseContext/formation.context';

export default function Formation() {

  const {formations} = useContext(FormationContext)
  
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearch(value)
  }

  return (
    <>      
     
      {/* Container fluid */}
      <section className="container-fluid p-4">
        <div className="row">
          {/* Page Header */}
          <div className="col-lg-12 col-md-12 col-12">
            <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">Liste des formations</h1>
                {/* Breadcrumb */}
                {/* <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="../dashboard/admin-dashboard.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Courses</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Courses Category</li>
                  </ol>
                </nav> */}
              </div>
              <div>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newCatgory">Add New Category</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            {/* Card */}
            <div className="card mb-4">
              {/* Card header */}
              <div className="card-header border-bottom-0">
                {/* Form */}
                <form className="d-flex align-items-center">
                  <span className="position-absolute ps-3 search-icon">
                    <i className="fe fe-search" />
                  </span>
                  <input type="search" className="form-control ps-6" onChange={handleSearch} placeholder="Search Course formation" />
                </form>
              </div>
              {/* Table */}
              <div className="table-responsive border-0 overflow-y-hidden">
                <table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
                  <thead className="table-light">
                    <tr>
                      
                      <th>Nom</th>
                      <th>Image</th>
                      
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
     
                
                  {
                  formations
                  .filter((val) => {
                    return val.nom.toLowerCase().includes(search.toLowerCase());
                  }).map((formation) => {
                    return <CardFormation formation={formation} />
                  })}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {/* <div className="modal fade" id="newCatgory" tabIndex={-1} role="dialog" aria-labelledby="newCatgoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Nom
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nom' onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                  nombre_heur
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='nombre_heur' onChange={(e) => setNomb(e.target.value)} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    prix
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" name='prix' onChange={(e) => setPrix(e.target.value)} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Image miniature
                    <span className="text-danger">*</span>
                  </label>
                  <input type="file" onChange={handleFileChange} className="form-control" placeholder="Write a Category" required />
                  <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div>
                </div>

              <div className="mb-3 mb-2">
                  <select class="form-select" onChange={(e) => setSouscat(e.target.value)} >
                      <option selected>SousCat</option>
                      <option >..</option>
                      {sous.map((post) => (

                          <option value={post.slug}>{post.nom}</option>
                      ))}
                      
                  </select>
                  <div className="invalid-feedback">Please enter valid type_compte.</div>
              </div>
                
                <div>
                  <button type="submit" className="btn btn-primary">Add New Category</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  */}
      
    </>
  )
}
