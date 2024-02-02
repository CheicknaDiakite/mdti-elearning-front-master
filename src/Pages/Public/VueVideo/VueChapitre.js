import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { formationChapitre } from '../../../_services';
import { Link } from 'react-router-dom';

export default function VueChapitre({slug}) {
    const sluger = {
        "formation_slug": slug
      }
      const {
        data: chapitre_vue,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["chapitre"],
        queryFn: () =>
        formationChapitre.allChapitre(sluger)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const chapitres = chapitre_vue.donnee
      console.log("ddcha",chapitres)
  return (
    <>
    {chapitres?.length > 0 ? 
        chapitres.map((post)=> (
        <>
            {/* Toggle */}
        <Link to={`#${post.id}`} className="d-flex align-items-center h4 mb-0" data-bs-toggle="collapse"  role="button" aria-expanded="true" aria-controls={post.id}>
            <div className="me-auto">Introduction to {post.nom}</div>
            {/* Chevron */}
            <span className="chevron-arrow ms-4">
            <i className="fe fe-chevron-down fs-4" />
            </span>
        </Link>
        {/* Row */}
        {/* Collapse */}
        <div className="collapse show" id={post.id} data-bs-parent="#courseAccordion">
            <div className="py-4 nav" id="course-tabOne" role="tablist" aria-orientation="vertical" style={{display: 'inherit'}}>
            {post.video?.map((post)=> (
            <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-development-tab" data-bs-toggle="pill" href="#course-development" role="tab" aria-controls="course-development" aria-selected="false">
                <div className="text-truncate">
                <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                <span>Installing Development Software</span>
                </div>
                <div className="text-truncate">
                <span>3m 11s</span>
                </div>
            </a>
            ))}
            {/* <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-development-tab" data-bs-toggle="pill" href="#course-development" role="tab" aria-controls="course-development" aria-selected="false">
                <div className="text-truncate">
                <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                <span>Installing Development Software</span>
                </div>
                <div className="text-truncate">
                <span>3m 11s</span>
                </div>
            </a>
            <a className="mb-2 d-flex justify-content-between align-items-center text-inherit" id="course-project-tab" data-bs-toggle="pill" href="#course-project" role="tab" aria-controls="course-project" aria-selected="false">
                <div className="text-truncate">
                <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                <span>Hello World Project from GitHub</span>
                </div>
                <div className="text-truncate">
                <span>2m 33s</span>
                </div>
            </a>
            <a className="d-flex justify-content-between align-items-center text-inherit" id="course-website-tab" data-bs-toggle="pill" href="#course-website" role="tab" aria-controls="course-website" aria-selected="false">
                <div className="text-truncate">
                <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2"><i className="fe fe-play fs-6" /></span>
                <span>Our Sample Website</span>
                </div>
                <div className="text-truncate">
                <span>2m 15s</span>
                </div>
            </a> */}
            </div>
        </div>
        </>
    ))
    : 'Pas de chapitre'
    }
    
    </>
  )
}
