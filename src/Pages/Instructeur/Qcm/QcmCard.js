import React, { useEffect, useRef, useState } from 'react'
import { questionService } from '../../../_services';
import toast from 'react-hot-toast';
import QcmReponse from './QcmReponse';

export default function QcmCard({index, petit}) {

    const [questions, setQcm] = useState([]);
    
    const top = {
        qcm_id: index.id
    }
    const flag = useRef(false)
    useEffect(()=>{
        if(flag.current===false){
        questionService.getQuestion(top)
        .then(res => {
            if(res.data.etat===true){
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
    
    },[]);
    let messa = "";

    const msg = (message) => {
        messa = message;
        petit(message)
    }

    // console.log('rrr',questions)
  return (
    <>
    <div>
    {questions?.length > 0 ? 
        questions.map((post) => (<>
        <h1>{post.question}</h1>
        <QcmReponse question={post.id} qcm_id={index.id} enfant={msg} />
        </>))
    : 'Pas de Question'
    }
        
        {/* <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
            <label className="form-check-label" htmlFor="exampleRadios2">
            Second default radio
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
            <label className="form-check-label" htmlFor="exampleRadios3">
            Disabled radio
            </label>
        </div> */}
    </div>
    </>
  )
}
