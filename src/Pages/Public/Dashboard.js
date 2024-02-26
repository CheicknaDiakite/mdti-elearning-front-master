import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { formationService } from '../../_services';
import FormationContext from '../../components/UseContext/formation.context';

export default function Dashboard() {
  const { user } = useContext(FormationContext)
  const top = {
    instructeur_id : user,
  }
  const {
    data: formation,
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["formation_instruct", top],
    queryFn: () =>
      formationService.allFormation(top)
      .then((res) => res.data),
    onerror: (error) => console.log(error),
  });
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const formations = formation.donnee;

  console.log('dd ..',formations)
  return (
    <>
    <div className="col-lg-9 col-md-8 col-12">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            <div className="p-4">
              <span className="fs-6 text-uppercase fw-semibold">Revenue</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">$467.34</h2>
              <span className="d-flex justify-content-between align-items-center">
                <span>Earning this month</span>
                <span className="badge bg-success ms-2">$203.23</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            <div className="p-4">
              <span className="fs-6 text-uppercase fw-semibold">Le nombre formation</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">{formations?.length}</h2>
              {/* <span className="d-flex justify-content-between align-items-center">
                <span>New this month</span>
                <span className="badge bg-info ms-2">120+</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            <div className="p-4">
              <span className="fs-6 text-uppercase fw-semibold">Courses Rating</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">4.80</h2>
              <span className="d-flex justify-content-between align-items-center">
                <span>Rating this month</span>
                <span className="badge bg-warning ms-2">10+</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="card mb-4">
        {/* Card header */}
        <div className="card-header">
          <h3 className="h4 mb-0">Earnings</h3>
        </div>
        {/* Card body */}
        <div className="card-body">
          <div id="earning" className="apex-charts" />
        </div>
      </div>
      {/* Card */}
      <div className="card mb-4">
        {/* Card header */}
        <div className="card-header">
          <h3 className="h4 mb-0">Order</h3>
        </div>
        {/* Card body */}
        <div className="card-body">
          <div id="orderColumn" className="apex-charts" />
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
                <th>Courses</th>
                <th>Sales</th>
                <th>Amount</th>
                <th />
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                <td>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <img src="../assets/images/course/course-laravel.jpg" alt="course" className="rounded img-4by3-lg" />
                      <h5 className="ms-3 text-primary-hover mb-0">Building Scalable APIs with GraphQL</h5>
                    </div>
                  </a>
                </td>
                <td>34</td>
                <td>$3,145.23</td>
                <td>
                  <span className="dropdown dropstart">
                    <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown1">
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
              <tr>
                <td>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <img src="../assets/images/course/course-sass.jpg" alt="course" className="rounded img-4by3-lg" />
                      <h5 className="ms-3 text-primary-hover mb-0">HTML5 Web Front End Development</h5>
                    </div>
                  </a>
                </td>
                <td>30</td>
                <td>$2,611.82</td>
                <td>
                  <span className="dropdown dropstart">
                    <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown2">
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
              <tr>
                <td>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <img src="../assets/images/course/course-vue.jpg" alt="course" className="rounded img-4by3-lg" />
                      <h5 className="ms-3 text-primary-hover mb-0">Learn JavaScript Courses from Scratch</h5>
                    </div>
                  </a>
                </td>
                <td>26</td>
                <td>$2,372.19</td>
                <td>
                  <span className="dropdown dropstart">
                    <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown3">
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
              <tr>
                <td>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <img src="../assets/images/course/course-react.jpg" alt="course" className="rounded img-4by3-lg" />
                      <h5 className="ms-3 text-primary-hover mb-0">Get Started: React Js Courses</h5>
                    </div>
                  </a>
                </td>
                <td>20</td>
                <td>$1,145.23</td>
                <td>
                  <span className="dropdown dropstart">
                    <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown4" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown4">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </>
  )
}
