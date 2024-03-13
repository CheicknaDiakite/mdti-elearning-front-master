import React, { useState } from 'react'
import AutreReponse from './AutreReponse'
import { examenService } from '../../../../_services';

export default function AutreQestion({question, user, id}) {
    // console.log("az", question.question)
    const [answers, setAnswers] = useState({});
    const [a, setA] = useState("");
    const [an, setAn] = useState("");
    const yopere = (bool, re) => {
      // messa = message
      console.log('pub',bool, re)
      setA(bool)
      setAn(re)
      
    }
    console.log('fg',an, a)

    const onSubmit = (e) => {
      e.preventDefault();

      answers['qcm_id']= id
      answers['apprenant_id']= user
      answers['point']= question.point
      answers['duree']= 5
      answers['reponse']= an
      answers['correct']= a
      answers['nom']= question.question

      console.log('Réponses soumises :', answers);

      examenService.addExamen(answers)
      .then((response) => {
        console.log("UpdateForma",response.data);
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  return (
    <>
    <form onSubmit={onSubmit}>
    <p>{question.question}</p>
    {question.reponse?.map((option, optionIndex) => {
      return <AutreReponse key={optionIndex} option={option} enfant={yopere} />
    })}

    <button type="submit">Soumettre</button>
    </form>
    </>
  )
}
