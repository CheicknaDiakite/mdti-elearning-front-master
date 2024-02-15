import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useRef, useState } from "react";
import { accountService, categorieService, formationService, sousCatService } from "../../_services";
import toast from "react-hot-toast";

const FormationContext = createContext({
    formations: [],
    updateFormation: () => {},
    deleteFormation: () => {},
});
export default FormationContext;

const FormationContextProvider = ({children}) => {
  const flag = useRef(false)
  const [sous_categories, setSouscat] = useState([]);
    // pour l'id de lutilisateur connecter
    const user = accountService.getToken()
    // fin

    // pour la recupération de tous les formations    
    useEffect(()=>{

      if(flag.current===false){
        sousCatService.allSousCat()
        .then((res) => {
          
          setSouscat(res.data.donnee);
          
          // Faire quelque chose avec la réponse
        })
      .catch(error => 
          toast.error("Erreur connexion")
          )
      }
  
      return () => flag.current = true;;;
  
    },[]);
    // fin

    // pour la recupération de tous les formations
    const {
      data: format,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["formations"],
      queryFn: () =>
        formationService.tousFormation()
        .then((res) => res.data),
      onerror: (error) => console.log(error),
    });
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    const formations = format.donnee
    // fin    

    return (
        <FormationContext.Provider value={{
            formations,
            sous_categories,
            user,
        }}>
            {children}
        </FormationContext.Provider>
    )
}

const CategorieContextProvider = ({children}) => {
  const useQ = useQueryClient();
  const mutation = useMutation({
    mutationFn: (categorie) => {
    return categorieService.deleteCategorie(categorie)
    .then((res) => {
      if(res.data.etat!==true){
        toast.error(res.data.message)
      }
    })
    },
    onError: (error) => {
    toast.error("Une erreur est survenue0");
    },
    onSuccess: () => {
    useQ.invalidateQueries("Categorie");
    },
});
  const handleDelete = (categorie) => {
    mutation.mutate(categorie);
  };

  const {
    data: categorie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      categorieService.allCategorie()
      .then((res) => res.data),
    onerror: (error) => console.log(error),
  });
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const categories = categorie.donnee
  return (
    <FormationContext.Provider value={{
      categories,
      deleteFormation: handleDelete,
    }}>
      {children}
    </FormationContext.Provider>
  )
}
export {FormationContextProvider, CategorieContextProvider};