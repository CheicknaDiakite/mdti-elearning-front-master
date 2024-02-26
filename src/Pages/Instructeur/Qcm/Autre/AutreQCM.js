import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { examenService, qcmService, questionService } from '../../../../_services';
import { useParams } from 'react-router-dom';
import AutreCard from './AutreCard';

export default function AutreQCM() {
    let {id} = useParams()

    const [qcms, setQcm] = useState([]);
    const [answers, setAnswers] = useState({});
    const [examen, setExamen] = useState("");
    const flag = useRef(false)

    const slug = {
        qcm_id: id
    }

    const pere = (message) => {
        // messa = message
        console.log('yy ee ss',message)
        setExamen(message)
      }
      useEffect(() => {
        // Appeler la fonction pere une seule fois après le rendu initial
        const message = "Bonjour, je suis un message";
        pere(message);
      }, []);
      
      
    useEffect(()=>{

        if(flag.current===false){
        questionService.allQuestion(slug)
        .then(res => {
            if(res.data.etat===true){
                console.log("yy",res.data.donnee)
                setQcm(res.data.donnee);
            } else {
                toast.error("Ont n'arrivent pas recuperer les QCM ");
            }
        })
        .catch(error => 
            toast.error("Erreur connexion")
            )
        }
    
        return () => flag.current = true;;;
    
    },[slug]);

    const onChange = (e) => {
        const { name, value, checked } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: {
            ...prevAnswers[name],
            [value]: checked
            }
        }));
      };

    const onSubmit = (e) => {
        e.preventDefault();

        answers['qcm_id']= id
        answers['point']= 5
        answers['duree']= 5
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

    //   console.log('Réponses soumises :', qcms);
    
  return (
    <>
    <form onSubmit={onSubmit}>
      {qcms.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.reponse?.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="checkbox"
                name={`q ${index}`}
                value={option.reponse}
                checked={answers[`q${index}`] && answers[`q${index}`][option]}
                onChange={onChange}
                
              />
              {option.reponse}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Soumettre</button>
    </form>

    </>
  )
}
