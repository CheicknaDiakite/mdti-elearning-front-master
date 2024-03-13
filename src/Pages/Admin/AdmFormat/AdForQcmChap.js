import React from 'react'
import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query';
import { courService } from '../../../_services';
import CourFormat from '../A_Format_Cours/CourFormat';
import AjoutChapitre from '../AdmChapitre/AjoutChapitre';
import FormaQCM from '../AdmQcm/FormaQCM';


export default function AdForQcmChap() {
  
    let {slug} = useParams()

    const top = {
      formation_slug : slug,
    }
  const {
      data: cour,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["cours", top],
      queryFn: () =>
        courService.allCour(top)
        .then((res) => res.data),
      onerror: (error) => console.log(error),
    });
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    const cours = cour.donnee;
    // console.log("cours ..",cours)
  return (
    <>
      <section className="container-fluid p-4">

      <div className="col-lg-4 col-md-12 col-12">
        {/* Card */}
        <div className="card mb-4">
          <div className="p-4">
            <span className="fs-6 text-uppercase fw-semibold">Le nombre de personne qui ont acheter ce cours.</span>
            <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">{cours?.length}</h2>
            {/* <span className="d-flex justify-content-between align-items-center">
              <span>New this month</span>
              <span className="badge bg-info ms-2">120+</span>
            </span> */}
          </div>
        </div>
      </div>
      {/* Chapitre */}
      <AjoutChapitre slug={slug}/>

      {/* QCM */}
      <FormaQCM slug={slug} />

      {/* Cour */}
      <CourFormat slug={slug} />
      </section>

    </>
  )
}
