import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import FormaQCM from '../Qcm/FormaQCM';
import CourFormat from '../Formation_Cours/CourFormat';
import AjoutChapitre from '../Chapitre/AjoutChapitre';
import FormationContext from '../../../components/UseContext/formation.context';


export default function FormQcmChapit() {
  
    let {slug} = useParams()

  return (
    <>
    {/* Chapitre */}
    <AjoutChapitre slug={slug}/>

    {/* QCM */}
    <FormaQCM slug={slug} />

    {/* Cour */}
    <CourFormat slug={slug} />

    </>
  )
}
