import React from 'react'
import { Link } from 'react-router-dom'

export default function CateCard({post}) {
    const publishedPosts = post.formation.filter(post => post.publier === true);
    const nombre = publishedPosts?.length;
    console.log("publishedPosts",nombre)
  return (
    <>
    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {/* Card */}
                <div className="card mb-4 card-hover">
                <div className="d-flex justify-content-between align-items-center p-4">
                    <div className="d-flex">
                    <Link to={`/formation/categorie/${post.id}`}>
                        {/* Img */}
                        <img src="../assets/images/path/path-bootstrap.svg" alt="bootstrap" className="avatar-md" />
                    </Link>
                    <div className="ms-3">
                        <h4 className="mb-1">
                        <Link className="text-inherit">{post.nom}</Link>
                        </h4>
                        <p className="mb-0 fs-6">
                        <span className="me-2">
                            <span className="text-dark fw-medium">{nombre} </span>
                            Nbr de cour dispo
                        </span>
                        {/* <span>
                            <span className="text-dark fw-medium">34</span>
                            Hours
                        </span> */}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
    </>
  )
}
