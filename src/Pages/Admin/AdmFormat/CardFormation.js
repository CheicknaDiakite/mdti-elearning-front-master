import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { accountService, sousCatService } from '../../../_services';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE } from '../../../_services/caller.service';

export default function CardFormation({formation}) {

  // user
  const userID = accountService.getToken();
  const [user, setUser] = useState([]);
  const flag = useRef(false)

 
  useEffect(()=>{

    if(flag.current===false){
      accountService.getUser(userID)
    .then(res => {
        if(res.data.etat===true){
            
          setUser(res.data.donnee);
            
        } else {
            toast.error("Les identifiants sont incorrects");
        }
    })
    .catch(error => 
        toast.error("Erreur connexion")
        )
    }

    return () => flag.current = true;;;

  },[]);
  // fin user

    const [posts, setPosts] = useState([]);
    const [base64Image, setBase64Image] = useState('');
    const [categorie_slug, setSouscat] = useState('');
    const [nom, setName] = useState('');

    // Pour la recuperation de la clé etranger (categorie)
    useEffect(()=>{
      const getPosts = async () =>{
          const { data: res } = await axios.post('http://127.0.0.1:8000/formation/categorie/get');
          setPosts(res.donnee);
          console.log(res)
      };
      getPosts();
  
  },[]);
  // fin

    const handleDelete = async (formation) => {      
        sousCatService.deleteSousCat(formation)
        .then((response) => {
          if(response.data.etat===true){
            setPosts(posts.filter((p)=> p.id !== formation.id ));
            toast.success("Suppression réussie");
          }else {
            toast.error(response.data.message || "Vous etes pas connecter !");
            
          }
        })
        .catch((error) => {
          toast.error("Une erreur un survenu");
        });              
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        // Convertir l'image en base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
    
        reader.readAsDataURL(file);
      };

      const onSubmit = (e) => {
        e.preventDefault();
    
        // Créer un objet à envoyer au serveur
        const data = {
          nom,
          categorie_slug,
          image: base64Image,
        };
    
        sousCatService.updateSousCat(data)
          .then((response) => {
            console.log(response.data);
            // Faire quelque chose avec la réponse
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      let url = BASE(formation.miniature)

  return (
    <>
       {formation.ajout_terminer===true && <>
        <tr className="accordion-toggle collapsed "  id="accordion1" data-bs-toggle="collapse" data-bs-parent="#accordion1" data-bs-target="#collapseOne">
          
          <td>
            <Link className="dropdown-item" to={`/admin/formation/edit/${formation.slug}`}>
            <i className="fe fe-edit dropdown-item-icon" />
              {formation.nom}
            </Link>
          </td>
          <td><img src={url} alt="" class="img-4by3-lg rounded" /></td>
          
          <td>
          <span className="badge bg-success">Live</span>
          </td>
          <td>
          <span className="dropdown dropstart">
              <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
              <i className="fe fe-more-vertical" />
              </a>
              <span className="dropdown-menu" aria-labelledby="courseDropdown1">
              
              <Link className="dropdown-item" 
                to={`/admin/formation/edit/${formation.slug}`}>
                  <i className="fe fe-edit dropdown-item-icon" />
                  Edit
              </Link>
              <button className="dropdown-item" onClick={()=>handleDelete(formation)}>
                  <i className="fe fe-trash dropdown-item-icon" />
                  Delete
              </button>
              </span>
          </span>
          </td>
        </tr> 
       </>}
       
      

        
    </>
  )
}
