import React, { useState } from 'react'

export default function AutreReponse({option, enfant}) {
    // console.log('qsd', option.reponse)
    const [correct, setPublier] = useState(false);
    const Publier = () => {
      setPublier(prevState => !prevState);
    }
    enfant(correct, option.reponse)
    console.log("aq", correct, option.reponse)
  return (
    <>
    <label >
        <input
        type="checkbox"
        // name={`q ${index}`}
        // value={option.reponse}
        onClick={Publier}
        // checked={answers[`q${index}`] && answers[`q${index}`][option]}
        // onChange={onChange}
        
        />
        {option.reponse}
    </label>
    </>
  )
}
