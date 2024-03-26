import React, { useEffect, useRef, useState } from 'react'
import { courService, discutionService, examenService, formationChapitre, formationService, participerService, qcmService, questionService, seanceTravail, sliderService, sousCatService, suiveService } from '../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useForma(slug) {
  const useQ = useQueryClient();
    // alert(slug)
    const {
      data: formations,
      error,
      isLoading: isLoad,
    } = useQuery({
      queryKey: ["formations"],
      queryFn: () =>
      formationService.tousFormation()
        .then((res) => res.data.donnee),
      onerror: (error) => console.log(error),
    });
    // if (isLoading) {
    //   return <div>Chargement...</div>;
    // }
    // const cour = formation.donnee
    const [formation, setFormation] = useState([]);
    
    const flag = useRef(false)

    useEffect(()=>{

      if(flag.current===false){
          formationService.unFormation(slug)
        .then(res => {
          if(res.data.etat===true){
  
            console.log("Formation",res.data.donnee)
            setFormation(res.data.donnee);
          } else {
            // toast.error("Nom trouver");
          }
        })
        .catch(err => console.log(err))
      }
      return () => flag.current = true;;;
        
    },[slug]);

    console.log("vbvb", slug)
    const {
      data: formaInstruc,
      // error,
      isLoading,
    } = useQuery({
      queryKey: ["formation_instruct", slug],
      queryFn: () =>
        formationService.allFormation(slug)
        .then((res) => res.data.donnee),
      onerror: (error) => console.log(error),
    });

    const ajout = useMutation({
      mutationFn: (data) => {
        return formationService.addFormation(data)
      },
      onError: (error) => {
        toast.error("Une erreur est survenue0");
      },
      onSuccess: () => {      
        useQ.invalidateQueries({ queryKey: ["formation_instruct"] });
        toast.success("Publication ajoutée avec succès");
      
      },
    });
    const create = (nom) => {
      ajout.mutate(nom)
    } 

    
  return {formation, formations, isLoad, formaInstruc, create, isLoading};
}

export function useChapitre (slug) {
  
  const useQ = useQueryClient();

  const {
      data: chapitre,
      // error,
      isLoading,
    } = useQuery({
      queryKey: ["chap", slug],
      queryFn: () =>
      formationChapitre.allChapitre(slug)
        .then((res) => res.data.donnee),
      onerror: (error) => console.log(error),
    });

  const del = useMutation({
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
    useQ.invalidateQueries({queryKey: ["chap"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteChapitre = (post) => {
    del.mutate(post);
  };

  const add = useMutation({
    mutationFn: (chap) => {
    return formationChapitre.addChapitre(chap)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["chap"]});
        console.log("Formation")
        
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
  const addChapitre = (chap) => {
    add.mutate(chap);
  };

  const modif = useMutation({
        mutationFn: (chap) => {
        return formationChapitre.updateChapitre(chap)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            console.log("Formation")
            
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
  const updateChapitre = (chap) => {
    modif.mutate(chap);
  };


  return {chapitre, deleteChapitre, addChapitre, updateChapitre, isLoading}
}

export function useSlider (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: sliders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: () =>
      sliderService.allSlider()
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return sliderService.deleteSlider(post)
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
    useQ.invalidateQueries({queryKey: ["slider"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteSlider = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return sliderService.addSlider(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["slider"]});
        
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
  const addSlider = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (chap) => {
        return formationChapitre.updateChapitre(chap)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            console.log("Formation")
            
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
  const updateChapitre = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {sliders, deleteSlider, addSlider, updateChapitre, isLoading}
}

export function useQuestion (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: questions,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["question", slug],
    queryFn: () =>
    questionService.allQuestion(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return questionService.deleteQuestion(post)
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
    useQ.invalidateQueries({queryKey: ["question"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteQuestion = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return questionService.addQuestion(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["question"]});
        
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
  const addQuestion = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (chap) => {
        return formationChapitre.updateChapitre(chap)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            console.log("Formation")
            
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
  const updateChapitre = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {questions, deleteQuestion, addQuestion, updateChapitre, isLoading}
}

export function useCour (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: cours,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cours", slug],
    queryFn: () =>
    courService.allCour(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return courService.deleteCour(post)
    .then(res => {
        if(res.data.etat!==true){
          toast.error(res.data.message);
        } else {
          useQ.invalidateQueries({queryKey: ["cours"]});
          // toast.success("formations supprimée avec succès")
        }
      })
    },
    onError: (error) => {
    toast.error("Une erreur est survenue",error);
    },
    onSuccess: () => {
    useQ.invalidateQueries({queryKey: ["cours"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteCour = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return courService.addCour(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["cours"]});
        
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
  const addCour = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            console.log("Formation")
            
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
  const updateChapitre = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {cours, deleteCour, addCour, updateChapitre, isLoading}
}

export function useDiscution (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: discuts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Discutions", slug],
    queryFn: () =>
    discutionService.getDiscution(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return discutionService.deleteDiscution(post)
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
      useQ.invalidateQueries({queryKey: ["Discutions"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteDiscut = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return discutionService.addDiscution(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["Discutions"]});
        
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
  const addDiscut = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["Discutions"]});
            
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
  const updateDiscut = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {discuts, deleteDiscut, addDiscut, updateDiscut, isLoading}
}

export function useSousCat (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: sous_categorie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["souscat", slug],
    queryFn: () =>
    sousCatService.unSousCat(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return discutionService.deleteDiscution(post)
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
    return suiveService.addSuive(data)
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
        return courService.updateCour(data)
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

  return {sous_categorie, deleteSousCat, addSousCat, updateSousCat, isLoading}
}

export function useSuive (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: suives,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["suive", slug],
    queryFn: () =>
    suiveService.allSuive(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return suiveService.deleteSuive(post)
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
      useQ.invalidateQueries({queryKey: ["suive"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deletesuive = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return suiveService.addSuive(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["suive"]});
        
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
  const addsuive = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["suive"]});
            
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
  const updatesuive = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {suives, deletesuive, addsuive, updatesuive, isLoading}
}

export function useSeanceTravail (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: seance,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["suive", slug],
    queryFn: () =>
    seanceTravail.allSeance(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return discutionService.deleteDiscution(post)
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
      useQ.invalidateQueries({queryKey: ["suive"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteSeance = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return suiveService.addSuive(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["suive"]});
        
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
  const addSeance = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["suive"]});
            
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
  const updateSeance = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {seance, deleteSeance, addSeance, updateSeance, isLoading}
}

export function useExamen (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: examen,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["examen"],
    queryFn: () =>
    examenService.tousExamen()
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour l'affichage
  const {
    data: exam,
    
    isLoading: isLoad,
  } = useQuery({
    queryKey: ["examen", slug],
    queryFn: () =>
    examenService.allExamen(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return discutionService.deleteDiscution(post)
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
      useQ.invalidateQueries({queryKey: ["suive"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteSeance = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return suiveService.addSuive(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["suive"]});
        
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
  const addSeance = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["suive"]});
            
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
  const updateSeance = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {examen, exam, deleteSeance, addSeance, updateSeance, isLoading}
}

export function useQcm (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: qcm_s,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["examen"],
    queryFn: () =>
    qcmService.allQcm()
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour l'affichage
  const {
    data: qcm,
    
    isLoading: isLoad,
  } = useQuery({
    queryKey: ["examennn", slug],
    queryFn: () =>
    qcmService.getUnQcm(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return discutionService.deleteDiscution(post)
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
      useQ.invalidateQueries({queryKey: ["suive"]});
    // toast.success("formations supprimée avec succès");
    },
  });
  const deleteSeance = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return suiveService.addSuive(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["suive"]});
        
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
  const addSeance = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return courService.updateCour(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["suive"]});
            
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
  const updateSeance = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {qcm_s, qcm, deleteSeance, addSeance, updateSeance, isLoading}
}

export function useParticiper (slug) {

  const useQ = useQueryClient();
  // pour l'affichage
  const {
    data: participers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["participer"],
    queryFn: () =>
    participerService.tousParticiper()
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour l'affichage
  const {
    data: qcm,
    
    isLoading: isLoad,
  } = useQuery({
    queryKey: ["participer", slug],
    queryFn: () =>
    qcmService.getUnQcm(slug)
      .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
  });
  // fin
  // pour la suppression
  const del = useMutation({
    mutationFn: (post) => {
    return participerService.deleteParticiper(post)
    .then(res => {
        if(res.data.etat!==true){
          toast.error(res.data.message);
        } else {
          useQ.invalidateQueries({queryKey: ["participer"]});
          
        }
      })
    },
    // onError: (error) => {
    // toast.error("Une erreur est survenue",error);
    // },
    // onSuccess: () => {
    //   useQ.invalidateQueries({queryKey: ["participer"]});
    //   toast.danger("formations supprimée avec succès");
    // },
  });
  const deletePartcip = (post) => {
    del.mutate(post);
  };
  // fin
  // pour l'ajout
  const add = useMutation({
    mutationFn: (data) => {
    return participerService.addParticiper(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["participer"]});
        
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
  const addPartcip = (chap) => {
    add.mutate(chap);
  };
  // fin
  // pour la modification
  const modif = useMutation({
        mutationFn: (data) => {
        return participerService.updateParticiper(data)
        .then(res => {
          if(res.data.etat===true){
            toast.success("Modification reuissi");
            useQ.invalidateQueries({queryKey: ["participer"]});
            
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
  const updatePartcip = (chap) => {
    modif.mutate(chap);
  };
  // fin

  return {participers, qcm, deletePartcip, addPartcip, updatePartcip, isLoading}
}