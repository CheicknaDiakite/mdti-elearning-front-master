import React, { useEffect, useRef, useState } from 'react'
import { reponseService } from '../../../_services';
import toast from 'react-hot-toast';

export default function QcmReponse({question, enfant, qcm_id}) {
    
    const [correct, setPublier] = useState(true);
    const Publier = () => {
        correct ? setPublier(false) : setPublier(true)

        const message = {
            // correct: correct,
            // question_id: question,
            qcm_id: qcm_id
        }

        enfant(message)
      }
    console.log("ffffff",correct)
    
    const top = {
        question_id: question
    }
    const [reponses, setRepons] = useState([]);
    const flag = useRef(false)
    useEffect(()=>{
        if(flag.current===false){
        reponseService.getReponse(top)
        .then(res => {
            if(res.data.etat===true){
                setRepons(res.data.donnee);
            } else {
                // toast.error("Ont n'arrivent pas recuperer les QCM ");
            }
        })
        .catch(error => 
            toast.error("Erreur connexion")
            )
        }
    
        return () => flag.current = true;;;
    
    },[]);
    // console.log("reponse", publier)

    const handleClik = () => {
        const message = {
            correct: correct,
            question_id: question,
        }

        enfant(message)
    }

  return (
    <>
    {reponses?.length > 0 ? 
        reponses.map((post) => (<>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" onClick={Publier} />
            <label className="form-check-label" htmlFor="defaultCheck1">
                {post.reponse}
            </label>
        </div>
        {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" onClick={handleClik} />
            <label className="form-check-label" htmlFor="defaultCheck1">
                {post.reponse}
            </label>
        </div> */}

        </>))
    : 'Pas de reponse'
    }
    
    </>
  )
}
