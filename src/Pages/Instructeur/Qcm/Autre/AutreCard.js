import React, { useEffect, useState } from 'react'

export default function AutreCard({post, posts, petit}) {

  console.log("a ..",posts)
    
    const [ajout_terminer, setTerminer] = useState(false);
    const Ajout_Terminer = () => {
        ajout_terminer ? setTerminer(false) : setTerminer(true)
        }
        const message = {
            // correct: correct,
            // question_id: question,
            question: post.id,
            ajout: ajout_terminer
        }
        useEffect(() => {
          // Appeler la fonction pere une seule fois après le rendu initial
          // const message = "Bonjour, je suis un message";
          petit(message)
        }, []);
        
  return (
    <>
    {/* <div className="col-md-4">
            <label htmlFor="validationServer01" className="form-label">{post.question}</label>
            {post.reponse?.map((pos) => (

            <div className="form-check">
                <input class="form-check-input" onClick={Ajout_Terminer} type="checkbox"/>
                <label className="form-check-label" htmlFor="validationFormCheck2">{pos.reponse}</label>
            </div>
            ))}

    </div> */}

    {post.options?.map((option, optionIndex) => (
      <option key={optionIndex} value={option}>{option}</option>
    ))}
    </>
  )
}
