import React, { useEffect, useRef, useState } from 'react'
import { accountService, temoinService } from '../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useUtilisateur(slug) {
  const [user, setPost] = useState([]);
  const useQ = useQueryClient();
  console.log("de",slug)
  // pour l'affichage
  const {
    // data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userr", slug],
    queryFn: () =>
    accountService.getUser(slug)
    .then(res => {
      if(res.data.etat===true){
          console.log(res.data.donnee)
          setPost(res.data.donnee);
          // toast.success("Connexion réussie");
      } else {
          toast.error("Les identifiants sont incorrects");
      }
  }),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return accountService.deleteDiscution(post)
    .then(res => {
        if(res.data.etat!==true){
          toast.error(res.data.message);
        } 
      })
    },
    onError: (error) => {
    toast.error("Une erreur est survenue",error);
    },
    onSuccess: () => {
      useQ.invalidateQueries({queryKey: ["souscat"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteSousCat = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return accountService.addSuive(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["souscat"]});
        
      } else {
        toast.error("Nom trouver");
      }
    })
    .catch(err => console.log(err))
    },
    onError: (error) => {
    toast.error("Une erreur est survenue0");
    }
  });
  const addSousCat = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return accountService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["souscat"]});
            
          } else {
            toast.error("Nom trouver");
          }
        })
        .catch(err => console.log(err))
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },        
  });
  const updateSousCat = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {user, deleteSousCat, addSousCat, updateSousCat, isLoading}
}
