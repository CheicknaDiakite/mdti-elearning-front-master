import React, { useContext, useState } from 'react'
import { BASE } from '../../../../_services/caller.service'
import FormationContext from '../../../../components/UseContext/formation.context';
import { Link } from 'react-router-dom';

export default function CardListDoc({post}) {
    let url = BASE(post.miniature)
    const { user } = useContext(FormationContext)
    const [nom, setName] = useState([]);
    const [ok, setOk] = useState('');
    const onChange = (e) => {
      setName({
          ...nom,
          [e.target.name]: e.target.value
      })
    }
    
    const onSubmitCour = (e) => {
        e.preventDefault();
    
        // const data = {
        //     montant: cour.prix,
        //     formation_slug: slug,
        //     apprenant_id: user,
        //   };
        nom['document_id']= post.id
        nom['client_id']= user

        console.log(nom)
    
        // courService.addCour(data)
        //   .then((response) => {
        //     console.log(response.data);
        //     // navigate('/admin/sous-categorie/index')
        //     toast.success("Ajout de la chapitre réussie");
        //     // Faire quelque chose avec la réponse
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
    };
  return (
    <>
        <div class="col-xl-3 col-md-6 col-12">
                <div class="card mb-4 card-hover border">
                    <a href="#!">
                    <img src={url} alt="writing" class="img-fluid w-100 rounded-top-3" />
                    </a>
                    <div class="card-body">
                    <h4 class="mb-3">
                        <a href="#!" class="text-inherit">{post.nom}</a>
                    </h4>
                    
                    <Link to={`/formation/ancien-sujet/${post.id}`} >
                        Enroll Today
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>

        
    </>
  )
}
