import React, { useEffect, useRef, useState } from 'react'
import { formationChapitre, formationService } from '../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useForma(slug) {
    // alert(slug)
    // const {
    //   data: formation,
    //   error,
    //   isLoading,
    // } = useQuery({
    //   queryKey: ["formation-vue", slug],
    //   queryFn: () =>
    //   formationService.unFormation(slug)
    //     .then((res) => res.data),
    //   onerror: (error) => console.log(error),
    // });
    // if (isLoading) {
    //   return <div>Chargement...</div>;
    // }
    // const cour = formation.donnee
    const [formation, setFormation] = useState([]);
    
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

    
  return {formation};
}

export function useChapitre (slug) {
  const [chapitre, setChapitre] = useState([]);
    const flag = useRef(false)
    const useQ = useQueryClient();
  useEffect(()=>{
  
    if(flag.current===false){
      
      formationChapitre.allChapitre(slug)

    .then(res => {
        if(res.data.etat===true){
            
          setChapitre(res.data.donnee);
            toast.success("Detail de la formation");
        } else {
            // toast.error("Les identifiants sont incorrects");
        }
    })
    .catch(error => 
        toast.error("Erreur connexion")
        )
    }

    return () => flag.current = true;;;

  },[slug]);

  const mutation = useMutation({
    mutationFn: (post) => {
    return formationChapitre.deleteChapitre(post)
    .then(res => {
        if(res.data.etat!==true){
          // toast.error(res.data.message);
        } 
      })
    },
    onError: (error) => {
    toast.error("Une erreur est survenue",error);
    },
    onSuccess: () => {
    useQ.invalidateQueries("formations");
    // toast.success("formations supprimée avec succès");
    },
});

  const deleteChapitre = (post) => {
    mutation.mutate(post);
  };

  return {chapitre, deleteChapitre}
}