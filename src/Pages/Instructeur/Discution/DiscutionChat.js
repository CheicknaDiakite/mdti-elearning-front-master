import React, { useEffect, useRef, useState } from 'react'

import toast from 'react-hot-toast';
import axios from 'axios';
import { accountService, discutionService } from '../../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ApChat from './Apprenant/ApChat';
import InsAdm from './InstrucAdmin/InsAdm';

export default function DiscutionChat({user, slug}) {
    const sluger = {
        "formation_slug": slug,
        "apprenant_id": user,
    }

    //Pour les Discutions
    // const [discutions, setDiscution] = useState([]);
    const [envoyer, setEnvoyer] = useState(false);
    const [discut, setDiscut] = useState('');
    const [us, setUser] = useState([]);
    const Envoyer = () => {
        envoyer ? setEnvoyer(false) : setEnvoyer(true)
      }
    const flag = useRef(false)
    useEffect(()=>{

        if(flag.current===false){
        accountService.getUser(sluger.apprenant_id)
        .then(res => {
            if(res.data.etat===true){
                setUser(res.data.donnee);
                // toast.success("Pour la discution");
            } else {
                toast.error("Ont n'arrivent pas recuperer les discutions ");
            }
        })
        .catch(error => 
            toast.error("Erreur connexion")
            )
        }
    
        return () => flag.current = true;;;
    
      },[]);

      const useText = useQueryClient();
      const mutation = useMutation({
        mutationFn: (discut) => {
          return discutionService.addDiscution(discut)
          .then(res => {
            if(res.data.etat===true){
                useText.invalidateQueries("discuts");
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        })
        },
        onError: (error) => {
          toast.error("Une erreur est survenue");
        },
        // onSuccess: () => {          
        //   useText.invalidateQueries("discuts");
        //   toast.success("Publication ajoutée avec succès");
        // //   navigate('/admin/categorie/index')
        // },
      });

    const {
        data: discuts,
        // error,
        isLoading,
      } = useQuery({
        queryKey: ["discuts"],
        queryFn: () =>
        discutionService.getDiscution(sluger)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const discutions = discuts.donnee;
    // fin 
    //   pour le user connecter sluger.apprenant_id
    
   
    // fin

    // pour Ajout des Discutions
    
    const onChangeDiscut = (e) => {
        setDiscut({
        ...discut,
        [e.target.name]: e.target.value
        })
    }

    const onDiscution = (e) => {
        e.preventDefault();
    
        // Créer un objet à envoyer au serveur
        discut["formation_slug"] = slug
        discut["apprenant_id"] = user
        discut["envoyer_par_apprenant"] = envoyer
    
        mutation.mutate(discut)
    };
    // fin ajout


  return (
    <>
    <section class="container-fluid px-0">

    <div class="row g-0">

        <div className="col-xl-9 col-lg-12 col-md-12 col-12">
            {/* chat list */}
            {us.type_compte!=='instructeur' ? 
                <div className="chat-body w-100 vh-100" data-simplebar>
            
                    <div className="px-4 py-4 vh-100 overflow-hidden">
                    {/* media */}
                    {discutions?.length > 0 ? 
                        discutions.map((post)=> (<>
                        {post.envoyer_par_apprenant ? <>
                            <ApChat post={post} />
                        </> : <>
                            <InsAdm post={post} />
                        </>}
                        
                        </>))
                    : 'Pas de Discution'
                    }
                    
                    
                    {/* media */}
                    
                    {/* media */}
                    
                    </div>
                    {/* chart footer */}
                    <div className="bg-light px-4 py-3 chat-footer mt-auto">
                    <div className="bg-white p-2 rounded-3 shadow-sm">
                        <form className="form-inline" onSubmit={onDiscution}>
                            <div className="position-relative">
                                <textarea className="form-control border-0 form-control-simple no-resize" name='message' onChange={onChangeDiscut} placeholder="Type a New Message"  />
                            </div>
                            <div className="position-absolute end-0 mt-n7 me-4">
                                <button type="submit" className="fs-3 btn text-primary btn-focus-none">
                                <i className="fe fe-send" />
                                </button>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={Envoyer} disabled/>
                                <label class="form-check-label" for="flexSwitchCheckChecked">Statut {envoyer ? envoyer.toString() : envoyer.toString()} input</label>
                            </div>
                        </form>
                    </div>
                    {/* <div className="mt-3 d-flex">
                        <div>
                        <a href="#" className="text-link me-2 fs-4"><i className="bi-emoji-smile" /></a>
                        <a href="#" className="text-link me-2 fs-4"><i className="bi-paperclip" /></a>
                        <a href="#" className="text-link me-3 fs-4"><i className="bi-mic" /></a>
                        </div>
                        <div className="dropdown">
                        <a href="#" className="text-link fs-4" id="moreAction" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fe fe-more-horizontal" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="moreAction">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            : ''
            }
            
        </div>
    </div>
    </section>

    </>
  )
}
