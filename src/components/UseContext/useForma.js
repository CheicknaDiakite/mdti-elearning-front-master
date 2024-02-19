import React, { useEffect, useRef, useState } from 'react'
import { formationService } from '../../_services';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useForma(slug) {
    // alert(slug)
    const [formati, setFormation] = useState([]);
    const flag = useRef(false)

    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            formationService.unFormation(slug)
          .then(res => {
            if(res.data.etat===true){
    
              console.log("Formation",res.data.donnee)
              setFormation(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
  return {formati};
}
