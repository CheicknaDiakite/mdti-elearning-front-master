import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { discutionService } from '../../../_services';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

export default function Discut() {
    let {id, slug} = useParams()

    console.log("recuppp",id,slug)

    const [envoyer, setEnvoyer] = useState(false);
    const Envoyer = () => {
       envoyer ? setEnvoyer(false) : setEnvoyer(true)
    }
    
    const [reponse, setReponse] = useState('');
    const onChange = (e) => {
        setReponse({
        ...reponse,
        [e.target.name]: e.target.value
        })
    }

    const useChap = useQueryClient();
    const mutation = useMutation({
        mutationFn: (reponse) => {
        return discutionService.addDiscution(reponse)
        },
        onError: (error) => {
        toast.error("Une erreur est survenue0");
        },
        onSuccess: () => {
        useChap.invalidateQueries("Discutions");
        toast.success("formations supprimée avec succès");
        },
    });

    
    // fin ajout

    // pour la recuperetion
    const top = {
      apprenant_id: id,        
      formation_slug: slug,        
    }
   
    const {
        data: discut,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["Discutions"],
        queryFn: () =>
        discutionService.getDiscution(top)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const discuts = discut.donnee;
      console.log("discution",discut.donnee)
    //   fin

    const onDiscution = (e) => {
        e.preventDefault();
    
        // Créer un objet à envoyer au serveur
        reponse["formation_slug"] = slug
        reponse["apprenant_id"] = id
        reponse["envoyer_par_apprenant"] = envoyer

        console.log("pour la disution",reponse)
    
        mutation.mutate(reponse);
    };
  return (
    <>
    {/* chat list */}
    <div className="chat-body w-100 vh-100" data-simplebar>
    <div className="bg-white border-top border-bottom px-4 py-3 sticky-top">
        <div className="d-flex justify-content-between align-items-center">
        {/* media */}
        <div className="d-flex align-items-center">
            <a href="#" className="me-2 d-xl-none d-block" data-close><i className="fe fe-arrow-left" /></a>
            <div className="avatar avatar-md avatar-indicators avatar-online">
            <img src="../../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle" />
            </div>
            {/* media body */}
            <div className="ms-2">
            <h4 className="mb-0">Sharad Mishra</h4>
            <p className="mb-0">Online</p>
            </div>
        </div>
        <div>
            <a href="#" className="me-3 text-link texttooltip" data-template="phone">
            <i className="fe fe-phone-call fs-3" />
            {/* text */}
            <div id="phone" className="d-none">
                <span>Voice Call</span>
            </div>
            </a>
            <a href="#" className="me-3 text-link texttooltip" data-template="video">
            <i className="fe fe-video fs-3" />
            {/* text */}
            <div id="video" className="d-none">
                <span>Video Call</span>
            </div>
            </a>
            <a href="#" className="text-link texttooltip" data-template="adduser">
            <i className="fe fe-user-plus fs-3" />
            {/* text */}
            <div id="adduser" className="d-none">
                <span>Add User</span>
            </div>
            </a>
        </div>
        </div>
    </div>
    <div className="px-4 py-4 vh-100 overflow-hidden">
        
        {/* media */}
        {discuts?.length > 0 ? 
            discuts.map((post)=> (<>
            {post.envoyer_par_apprenant!==true ? <>
                <div className="d-flex w-lg-40 mb-4">
                <img src="../../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle avatar-md" />
                {/* media body */}
                <div className="ms-3">
                    <small>sharad mishra , 09:42</small>
                    <div className="d-flex">
                    <div className="card mt-2 rounded-top-md-left-0">
                        <div className="card-body p-3">
                        <p className="mb-0 text-dark">{post.message}</p>
                        </div>
                    </div>
                    <div className="ms-2 mt-2">
                        {/* dropdown */}
                        <div className="dropdown dropend">
                        <a className="text-link" href="#" role="button" id="dropdownMenuLinkThree" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fe fe-more-vertical" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkThree">
                            <a className="dropdown-item" href="#">
                            <i className="fe fe-copy dropdown-item-icon" />
                            Copy
                            </a>
                            <a className="dropdown-item" href="#">
                            <i className="fe fe-corner-up-right dropdown-item-icon" />
                            Reply
                            </a>
                            <a className="dropdown-item" href="#">
                            <i className="fe fe-corner-up-left dropdown-item-icon" />
                            Forward
                            </a>
                            <a className="dropdown-item" href="#">
                            <i className="fe fe-star dropdown-item-icon" />
                            Favourite
                            </a>
                            <a className="dropdown-item" href="#">
                            <i className="fe fe-trash dropdown-item-icon" />
                            Delete
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </> : <>
                <div className="d-flex justify-content-end mb-4">
                        {/* media */}
                        <div className="d-flex w-lg-40">
                        {/* media body */}
                        <div className="me-3 text-end">
                            <small>09:39</small>
                            <div className="d-flex">
                            <div className="me-2 mt-2">
                                {/* dropdown */}
                                <div className="dropdown dropstart">
                                <a className="text-link" href="#" role="button" id="dropdownMenuLinkTwo" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fe fe-more-vertical" />
                                </a>
                                {/* dropdown menu */}
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkTwo">
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-copy dropdown-item-icon" />
                                    Copy
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-edit dropdown-item-icon" />
                                    Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-corner-up-right dropdown-item-icon" />
                                    Reply
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-corner-up-left dropdown-item-icon" />
                                    Forward
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-star dropdown-item-icon" />
                                    Favourite
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fe fe-trash dropdown-item-icon" />
                                    Delete
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
                                {/* card body */}
                                <div className="card-body text-start p-3">
                                <p className="mb-0">{post.message}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* img */}
                        <img src="../../assets/images/avatar/avatar-1.jpg" alt className="rounded-circle avatar-md" />
                        </div>
                </div>
            </>}
            
            </>))
        : 'Pas de Discution'
        }

        {/* chart footer */}
        <div className="bg-light px-4 py-3 chat-footer mt-auto">
            <div className="bg-white p-2 rounded-3 shadow-sm">
            <form className="form-inline" onSubmit={onDiscution}>
                <div className="position-relative">
                    <textarea className="form-control border-0 form-control-simple no-resize" name='message' onChange={onChange} placeholder="Type a New Message"  />
                </div>
                <div className="position-absolute end-0 mt-n7 me-4">
                    <button type="submit" className="fs-3 btn text-primary btn-focus-none">
                    <i className="fe fe-send" />
                    </button>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={Envoyer} />
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
    
    </div>

    </>
  )
}
