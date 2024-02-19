import React, { useEffect, useRef, useState } from 'react'
import { temoinService } from '../../_services';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useTemoin(sluger) {
    // alert(sluger)
    const [temoin, setTemoin] = useState([]);
    const flag = useRef(false)
    // const {
    //     data: temoins,
    //     error,
    //     isLoading,
    //   } = useQuery({
    //     queryKey: ["temoin", sluger],
    //     queryFn: () =>
    //     temoinService.allTemoin(sluger)
    //       .then((res) => res.data),
    //     onerror: (error) => console.log(error),
    //   });
    //   const tous = temoins.donnee
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            temoinService.allTemoin(sluger)
          .then(res => {
            if(res.data.etat===true){
    
              console.log("Formation",res.data.donnee)
              setTemoin(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[sluger]);
  return {temoin}
}
