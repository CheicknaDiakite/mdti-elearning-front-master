import React from 'react'
import { BASE } from '../../_services/caller.service'
import { Link } from 'react-router-dom'

export default function UserCard({post}) {
    console.log("id ",post)
    let url = BASE(post.avatar)
  return (
    <>
    <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                  {/* Card */}
                  <div className="card mb-4">
                    {/* Card body */}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="position-relative">
                          <Link to={`/admin/user/profil/${post.user_id}`} className="position-absolute mt-8 ms-n5">
                            <img src={url} className="rounded-circle avatar-xl mb-3" alt />
                            <span className="status bg-success" />
                          </Link>
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
    </>
  )
}
