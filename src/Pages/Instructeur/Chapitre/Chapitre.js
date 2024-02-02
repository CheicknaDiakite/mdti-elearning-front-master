import React from 'react'
import { formationChapitre } from '../../../_services';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ChapitreVideo from './ChapitreVideo';

export default function Chapitre({slug}) {
    const sluger = {
        "formation_slug": slug
      }
      const {
        data: chapitre,
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
      const chapitres = chapitre.donnee
      console.log("ddcha",chapitres)
  return (
    <>
        <div>
            {/* List group */}
            <ul className="list-group list-group-flush">
                <li className="list-group-item px-0 pt-0"></li>
                {/* Toggle */}
                {chapitres?.length > 0 ? 
                    chapitres.map((post)=> (
                    <>
                    <Link className="h4 mb-0 d-flex align-items-center" data-bs-toggle="collapse" to={`#${post.id}`} aria-expanded="true" aria-controls={post.id}>
                        <div className="me-auto">Introduction to {post.nom}</div>
                        {/* Chevron */}
                        <span className="chevron-arrow ms-4">
                        <i className="fe fe-chevron-down fs-4" />
                        </span>
                    </Link>

                    <div className="collapse" id={post.id} data-bs-parent="#courseAccordion">
                        <ChapitreVideo slug={slug} videos={post.video} />
                    </div>
                    </>
                ))
                : 'Pas de chapitre'
                }
                
            </ul>
        </div>
    </>
  )
}
