import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ancienDocument, ancienMatiere, ancienNiveau, ancienPaieDoc, ancienPay, ancienType, documentPaiement, formationPaiement } from "../../_services";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

export default function useAnc_Type(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les types
    const {
    data: Type,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Type"],
    queryFn: () =>
    ancienType.allType()
        .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });
    const [Ty, setTyp] = useState([])
    const flag = useRef(false)
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            ancienType.getType(slug)
          .then(res => {
            if(res.data.etat===true){
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return ancienType.addType(data)
    .then(res => {
        if(res.data.etat===true){
            useQ.invalidateQueries({queryKey: ["Type"]});
            
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
    const addType = (data) => {
    add.mutate(data);
    };

    // fin

    // suppression

    const del = useMutation({
        mutationFn: (data) => {
        return ancienType.deleteType(data)
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
        useQ.invalidateQueries({queryKey: ["Type"]});
        // toast.success("formations supprimée avec succès");
        },
    });

    const deleteType = (data) => {
    del.mutate(data);
    };

    // fin

    // modification

    const modif = useMutation({
        mutationFn: (data) => {
        return ancienType.updateType(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const updateType = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {Type, Ty, addType, deleteType, updateType, isLoading};
  }

export function useAnc_Niveau(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les types
    const {
    data: niveau,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Niveau"],
    queryFn: () =>
    ancienNiveau.allNiveau()
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });

    const [Ty, setTyp] = useState([])
    const flag = useRef(false)
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            ancienType.getType(slug)
          .then(res => {
            if(res.data.etat===true){
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return ancienNiveau.addNiveau(data)
    .then(res => {
        if(res.data.etat===true){
            useQ.invalidateQueries({queryKey: ["Niveau"]});
            
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
    const addNiveau = (data) => {
    add.mutate(data);
    };

    // fin

    // suppression

    const del = useMutation({
        mutationFn: (data) => {
        return ancienNiveau.deleteNiveau(data)
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
        useQ.invalidateQueries({queryKey: ["Niveau"]});
        // toast.success("formations supprimée avec succès");
        },
    });

    const deleteNiveau = (data) => {
    del.mutate(data);
    };

    // fin

    // modification

    const modif = useMutation({
        mutationFn: (data) => {
        return ancienType.updateType(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const updateType = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {niveau, Ty, addNiveau, deleteNiveau, updateType, isLoading};
  }

export function useAnc_Matiere(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les types
    const {
    data: matiere,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Matiere"],
    queryFn: () =>
    ancienMatiere.allMatiere()
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });

    const [Ty, setTyp] = useState([])
    const flag = useRef(false)
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            ancienType.getType(slug)
          .then(res => {
            if(res.data.etat===true){
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return ancienMatiere.addMatiere(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["Matiere"]});
          
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
    const addMatiere = (data) => {
    add.mutate(data);
    };

    // fin

    // suppression

    const del = useMutation({
        mutationFn: (data) => {
        return ancienMatiere.deleteMatiere(data)
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
        useQ.invalidateQueries({queryKey: ["Matiere"]});
        // toast.success("formations supprimée avec succès");
        },
    });

    const deleteMatiere = (data) => {
    del.mutate(data);
    };

    // fin

    // modification

    const modif = useMutation({
        mutationFn: (data) => {
        return ancienType.updateType(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const updateType = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {matiere, Ty, addMatiere, deleteMatiere, updateType, isLoading};
  }
export function useAnc_Document(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les types
    const {
    data: documents,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Document"],
    queryFn: () =>
    ancienDocument.tousDocument()
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });

    
    // const {
    // data: document,    
    // } = useQuery({
    // queryKey: ["DocumentUn", slug],
    // queryFn: () =>
    
    // ancienDocument.getDocument(slug)
    //   .then((res) => res.data.donnee),
    // onerror: (error) => console.log(error),
    // });

    const [document, setTyp] = useState([])
    const flag = useRef(false)
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
          ancienDocument.getDocument(slug)
          .then(res => {
            if(res.data.etat===true){
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return ancienDocument.addDocument(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["Document"]});
          
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
    const addDocument = (data) => {
    add.mutate(data);
    };

    // fin

    // suppression

    const del = useMutation({
        mutationFn: (data) => {
        return ancienDocument.deleteDocument(data)
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
        useQ.invalidateQueries({queryKey: ["Document"]});
        // toast.success("formations supprimée avec succès");
        },
    });

    const deleteDocument = (data) => {
    del.mutate(data);
    };

    // fin

    // modification

    const modif = useMutation({
        mutationFn: (data) => {
        return ancienType.updateType(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const updateDocument = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {documents, document, addDocument, deleteDocument, updateDocument, isLoading};
  }
export function useAnc_Pays(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les types
    const {
    data: pays,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Pay"],
    queryFn: () =>
    ancienPay.allPay()
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });

    const [Ty, setTyp] = useState([])
    const flag = useRef(false)
    useEffect(()=>{
        console.log('text 0')
        
        if(flag.current===false){
            ancienType.getType(slug)
          .then(res => {
            if(res.data.etat===true){
              setTyp(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
    },[slug]);
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return ancienPay.addPay(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["Pay"]});
          
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
    const addPay = (data) => {
    add.mutate(data);
    };

    // fin

    // suppression

    const del = useMutation({
        mutationFn: (data) => {
        return ancienMatiere.deleteMatiere(data)
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
        useQ.invalidateQueries({queryKey: ["Pay"]});
        // toast.success("formations supprimée avec succès");
        },
    });

    const deletePay = (data) => {
    del.mutate(data);
    };

    // fin

    // modification

    const modif = useMutation({
        mutationFn: (data) => {
        return ancienPay.updatePay(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const updatePay = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {pays, Ty, addPay, deletePay, updatePay, isLoading};
  }
export function useAnc_PaieDoc(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les gens qui ont payer
    const {
    data: payer,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["Payer", slug],
    queryFn: () =>
    documentPaiement.allDocuPaiement(slug)
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return documentPaiement.payerDocument(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["Payer"]});
          
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
    const addPay = (data) => {
    add.mutate(data);
    };

    // fin

    // Verification

    const modif = useMutation({
        mutationFn: (data) => {
        return documentPaiement.verifierDocuPaiement(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const verifierPay = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {payer, addPay, verifierPay, isLoading};
  }

export function useAnc_PaieForm(slug) {
    const useQ = useQueryClient();

    //   pour la recuperation de tous les gens qui ont payer
    const {
    data: payer,
    error,
    isLoading,
    } = useQuery({
    queryKey: ["PayerFormation", slug],
    queryFn: () =>
    formationPaiement.allPaiement(slug)
    .then((res) => res.data.donnee),
    onerror: (error) => console.log(error),
    });
      
    // fin

    // pour l'ajout

    const add = useMutation({
    mutationFn: (data) => {
    return formationPaiement.payerFormation(data)
    .then(res => {
      if(res.data.etat===true){
        useQ.invalidateQueries({queryKey: ["PayerFormation"]});
          
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
    const addPay = (data) => {
    add.mutate(data);
    };

    // fin

    // Verification

    const modif = useMutation({
        mutationFn: (data) => {
        return formationPaiement.verifierPaiement(data)
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
        // onSuccess: () => {
        // useQ.invalidateQueries("Type");
        // toast.success("Type supprimée avec succès");
        // },
    });
    const verifierPay = (data) => {
    modif.mutate(data);
    };

    // fin
    
      
    return {payer, addPay, verifierPay, isLoading};
  }
