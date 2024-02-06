import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Userlist() {
  
    let navigate = useNavigate()

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
      const getPosts = async () =>{
          const { data: res } = await axios.post('http://127.0.0.1:8000/utilisateur/get');
          setPosts(res.donnee);
          console.log(res)
      };
      getPosts();
  
    },[]);

    const [all] = useState('post');
    const { register, handleSubmit } = useForm();
    const [tous, setTous] = useState([]);

    const onSubmit = (e) => {
  
       axios.post('http://127.0.0.1:8000/utilisateur/get',e)
        .then((response) => {
          console.log(response.data);
          setTous(response.data.donnee);
          // Faire quelque chose avec la réponse
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    const onALL = (e) => {
      e.preventDefault();
  
      // Créer un objet à envoyer au serveur
      const data = {
        all,
      };
  
       axios.post('http://127.0.0.1:8000/utilisateur/get',data)
        .then((response) => {
          console.log(response.data);
          setTous(response.data.donnee);
          // Faire quelque chose avec la réponse
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    // useEffect(() => {
    //   userService.getAllUsers()
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
    // }, [])

    const marcel = (userId) => {
      console.log('click')
      navigate("../edit/"+userId)
    }
  
  return (
    <>
    {/* Container fluid */}
    <section className="container-fluid p-4">
    
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          {/* Page Header */}
          <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-1 h2 fw-bold">
                Le nombre d'inscrit 
                <span className="fs-5">  {tous.length}</span>
              </h1>
              {/* Breadcrumb  */}
              <nav aria-label="breadcrumb">
                {/* Card Header */}
                <div className="card-header p-0">
                  <ul className="nav nav-lb-tab border-bottom-0" id="tab" role="tablist">
                    <li className="nav-item">
                      <button className="nav-link active" onClick={onALL}>All</button>
                    </li>
                    <li className="nav-item">
                      
                      <form  className="nav-link" onSubmit={handleSubmit(onSubmit)}>
                        <select {...register("type_compte")}>
                          <option value="admin">admin</option>
                          <option value="instructeur">instructeur</option>
                          <option value="apprenant">apprenant</option>
                        </select>
                        <input type="submit" value="ok" />
                      </form>
                     
                    </li>
                    {/* <li className="nav-item">
                      <button className="nav-link" onClick={onSubmit}>Instructeur</button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" onClick={onSubmit}>Utilisateur</button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" onClick={onSubmit}>Deleted</button>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav btn-group" role="tablist">
              <button className="btn btn-outline-secondary active" data-bs-toggle="tab" data-bs-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="true">
                <span className="fe fe-grid" />
              </button>
              <button className="btn btn-outline-secondary" data-bs-toggle="tab" data-bs-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="false">
                <span className="fe fe-list" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          {/* Tab */}

          <div className="tab-content">
            {/* Tab Pane */}
            <div className="tab-pane fade show active" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
              <div className="mb-4">
                <input type="search" className="form-control" placeholder="Search Students" />
              </div>
              <div className="row">

                {tous.map((post) => (

                <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                  {/* Card */}
                  <div className="card mb-4">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="position-relative">
                          <img src="../../assets/images/avatar/avatar-12.jpg" className="rounded-circle avatar-xl mb-3" alt />
                          <a href="#" className="position-absolute mt-8 ms-n5">
                            <span className="status bg-success" />
                          </a>
                        </div>
                        <h4 className="mb-0">{post.last_name} {post.first_name}</h4>
                        <p className="mb-0">
                    
                          {post.email}
                          
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2 mt-6">
                        <span>Payments</span>
                        <span className="text-dark">$5,274</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span>Joined at</span>
                        <span>17 Aug, 2020</span>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <span>Courses</span>
                        <span className="text-dark">12</span>
                      </div>
                    </div>
                  </div>
                </div>

                ))}
                
              </div>
            </div>
            {/* Tab Pane */}
            <div className="tab-pane fade" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
              {/* Card */}
              <div className="card">
                {/* Card Header */}
                <div className="card-header">
                  <input type="search" className="form-control" placeholder="Search Students" />
                </div>
                {/* Table */}
                <div className="table-responsive">
                  <table className="table mb-0 text-nowrap table-hover table-centered">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Enrolled</th>
                        <th>Joined At</th>
                        <th>TotaL Payment</th>
                        <th>Locations</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-11.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Guy Hawkins</h5>
                          </div>
                        </td>
                        <td>6 Courses</td>
                        <td>7 July, 2020</td>
                        <td>$5,274</td>
                        <td>Los Angeles, CA</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr> */}
                      {tous.map((post) => (
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-12.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-secondary" />
                              </a>
                            </div>
                            <h5 className="mb-0">{post.last_name} {post.first_name}</h5>
                          </div>
                        </td>
                        <td>3 Courses</td>
                        <td>15 Aug, 2020</td>
                        <td>$2,660</td>
                        <td>{post.email}</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      ))}
                      {/* <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-13.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Jacob Jones</h5>
                          </div>
                        </td>
                        <td>7 Courses</td>
                        <td>12 Aug, 2020</td>
                        <td>$14,944</td>
                        <td>United State</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-14.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-secondary" />
                              </a>
                            </div>
                            <h5 className="mb-0">Kristin Watson</h5>
                          </div>
                        </td>
                        <td>5 Courses</td>
                        <td>5 Aug, 2020</td>
                        <td>$6,845</td>
                        <td>India</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-15.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Rivao Luke</h5>
                          </div>
                        </td>
                        <td>12 Courses</td>
                        <td>1 Aug, 2020</td>
                        <td>$8,230</td>
                        <td>Netherland</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-16.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Nia Sikhone</h5>
                          </div>
                        </td>
                        <td>12 Courses</td>
                        <td>30 July, 2020</td>
                        <td>$3,240</td>
                        <td>New York</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-17.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-secondary" />
                              </a>
                            </div>
                            <h5 className="mb-0">Xiaon Merry</h5>
                          </div>
                        </td>
                        <td>2 Courses</td>
                        <td>28 July, 2020</td>
                        <td>$2,140</td>
                        <td>Africa</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-15.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Rivao Luke</h5>
                          </div>
                        </td>
                        <td>12 Courses</td>
                        <td>1 Aug, 2020</td>
                        <td>$8,230</td>
                        <td>Netherland</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img src="../../assets/images/avatar/avatar-16.jpg" alt className="rounded-circle avatar-md me-2" />
                              <a href="#" className="position-absolute mt-5 ms-n4">
                                <span className="status bg-success" />
                              </a>
                            </div>
                            <h5 className="mb-0">Nia Sikhone</h5>
                          </div>
                        </td>
                        <td>12 Courses</td>
                        <td>30 July, 2020</td>
                        <td>$3,240</td>
                        <td>New York</td>
                        <td>
                          <div className="hstack gap-4">
                            <a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" title="Message" />
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Delete"><i className="fe fe-trash" /></a>
                            <span className="dropdown dropstart">
                              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                                <i className="fe fe-more-vertical" />
                              </a>
                              <span className="dropdown-menu">
                                <span className="dropdown-header">Settings</span>
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
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                  <div className="card-footer">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link mx-1 rounded" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                              </path></svg>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link mx-1 rounded" href="#">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                              </path></svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
