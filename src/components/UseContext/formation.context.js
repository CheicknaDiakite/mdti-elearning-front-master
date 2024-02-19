import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useRef, useState } from "react";
import { accountService, categorieService, discutionService, formationService, sousCatService } from "../../_services";
import toast from "react-hot-toast";

const FormationContext = createContext({
    formations: [],
    updateFormation: () => {},
    deleteFormation: () => {},
    create: () => {},
});
export default FormationContext;

const FormationContextProvider = ({children}) => {
  
    const [sous_categories, setSouscat] = useState([]);
    const [formations, setFormation] = useState([]);
    const useQ = useQueryClient();
    // pour l'id de lutilisateur connecter
    const user = accountService.getToken()
    // fin

    // pour la recupération de tous les Sous-Categories   
    const {      
      isLoading: isLoadSous,
    } = useQuery({
      queryKey: ["sous_categories"],
      queryFn: () =>
        sousCatService.allSousCat()
        .then((res) => {
          setSouscat(res.data.donnee);
        }),
      onerror: (error) => console.log(error),
    });
    // fin

    // pour l'ajout d'une formation
    const ajout = useMutation({
      mutationFn: (data) => {
        return formationService.addFormation(data)
      },
      onError: (error) => {
        toast.error("Une erreur est survenue0");
      },
      onSuccess: () => {      
        useQ.invalidateQueries("formations");
        toast.success("Publication ajoutée avec succès");
      
      },
    });
    const createFormation = (nom) => {
      ajout.mutate(nom)
    } 
    // fin

    // pour la modification des formations
    const updateFormat = (nom) => {
      formationService.updateFormation(nom)
      .then((response) => {
        console.log("UpdateForma",response.data);
        toast.success("Modifications fait avec success");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } 
    // fin

    // pour la suppression des formations
    
    const mutation = useMutation({
        mutationFn: (formation) => {
        return formationService.deleteFormation(formation)
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
        useQ.invalidateQueries("formations");
        // toast.success("formations supprimée avec succès");
        },
    });
    const handleDeleteForma = (formation) => {
        mutation.mutate(formation);
      };
    // fin

    // pour la recupération de tous les formations
    const {      
      isLoading,
    } = useQuery({
      queryKey: ["formations"],
      queryFn: () =>
        formationService.tousFormation()
        .then((res) => {
          setFormation(res.data.donnee)
        }),
      onerror: (error) => console.log(error),
    });
    if (isLoading || isLoadSous) {
      return <div>Chargement...</div>;
    }   
    // fin    

    return (
        <FormationContext.Provider value={{
            formations,
            deleteFormation: handleDeleteForma,
            updateFormation: updateFormat,
            sous_categories, create: createFormation,
            user,
        }}>
            {children}
        </FormationContext.Provider>
    )
}

const CategorieContextProvider = ({children}) => {
  const useQ = useQueryClient();
  // pour la suppression
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
  // fin

  // pour la creation de la categorie
  const ajout = useMutation({
    mutationFn: (data) => {
      return categorieService.addCategorie(data)
    },
    onError: (error) => {
      toast.error("Une erreur est survenue0");
    },
    onSuccess: () => {      
      useQ.invalidateQueries("categories");
      toast.success("Publication ajoutée avec succès");
    
    },
  });
  const createCategorie = (nom) => {
    ajout.mutate(nom)
  } 
  const updateCategorie = (nom) => {
    categorieService.updateCategorie(nom)
      .then((response) => {
          console.log("UpdateForma",response.data);
          toast.success("Modifications fait avec success");
          // Faire quelque chose avec la réponse
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  } 
  // fin

  // la recuperation de tous les categories
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
  // fin
  return (
    <FormationContext.Provider value={{
      categories,
      deleteFormation: handleDelete,
      updateFormation: updateCategorie,
      create: createCategorie,
    }}>
      {children}
    </FormationContext.Provider>
  )
}

const DiscutionChatProvider = ({children}) => {
  const useQ = useQueryClient();
  // pour l'id de lutilisateur connecter
  const user = accountService.getToken()
  // fin

  // pour la suppression
  const mutation = useMutation({
    mutationFn: (data) => {
    return discutionService.deleteDiscution(data)
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
  const handleDelete = (data) => {
    mutation.mutate(data);
  };
  // fin

  // pour la creation de la categorie
  const ajout = useMutation({
    mutationFn: (discut) => {
      return discutionService.addDiscution(discut)
      .then(res => {
        if(res.data.etat===true){
            useQ.invalidateQueries("discuts");
            toast.success(res.data.message);
        } else {
            toast.error(res.data.message);
        }
    })
    },
    onError: (error) => {
      toast.error("Une erreur est survenue");
    },
  });
  const createDiscution = (nom) => {
    ajout.mutate(nom)
  } 
  const updateCategorie = (nom) => {
    categorieService.updateCategorie(nom)
      .then((response) => {
          console.log("UpdateForma",response.data);
          toast.success("Modifications fait avec success");
          // Faire quelque chose avec la réponse
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  } 
  // fin

  // la recuperation de tous les categories
  // const {
  //   data: categorie,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () =>
  //     categorieService.allCategorie()
  //     .then((res) => res.data),
  //   onerror: (error) => console.log(error),
  // });
  // if (isLoading) {
  //   return <div>Chargement...</div>;
  // }
  // const categories = categorie.donnee
  // fin
  return (
    <FormationContext.Provider value={{
      create: createDiscution,
      user,
      deleteFormation: handleDelete,
      updateFormation: updateCategorie,
    }}>
      {children}
    </FormationContext.Provider>
  )
}

export {FormationContextProvider, CategorieContextProvider, DiscutionChatProvider};