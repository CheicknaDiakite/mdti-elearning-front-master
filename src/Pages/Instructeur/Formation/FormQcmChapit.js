import React from 'react'
import { useParams } from 'react-router-dom'
import FormaQCM from '../Qcm/FormaQCM';
import CourFormat from '../Formation_Cours/CourFormat';
import AjoutChapitre from '../Chapitre/AjoutChapitre';


export default function FormQcmChapit({user}) {
    let {slug} = useParams()

  return (
    <>
    {/* Chapitre */}
    <AjoutChapitre slug={slug}/>

    {/* QCM */}
    <FormaQCM slug={slug} />

    {/* Cour */}
    <CourFormat slug={slug} user={user} />

    </>
  )
}
