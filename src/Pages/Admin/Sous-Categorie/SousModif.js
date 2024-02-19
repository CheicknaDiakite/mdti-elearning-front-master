import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { sousCatService } from '../../../_services';
import { useQuery } from '@tanstack/react-query';
import { BASE } from '../../../_services/caller.service';

export default function SousModif() {
    let {id} = useParams()
    console.log("ddd",id)
    const [base64Image, setBase64Image] = useState('');
    const [nom, setNom] = useState([]);
    const onChange = (e) => {
        setNom({
            ...nom,
            [e.target.name]: e.target.value
        })
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
      const {
        // data: categorie,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["categorie", id],
        queryFn: () =>
        sousCatService.unSousCat(id)
        .then(res => {
          if(res.data.etat===true){
              console.log(res.data.donnee)
              setNom(res.data.donnee);
              toast.success("Connexion réussie");
          } else {
              toast.error("Les identifiants sont incorrects");
          }
      }),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }

    const onSubmit = (e) => {
        e.preventDefault();
    
        if(base64Image.includes("base64"))
        {
          nom["image"] = base64Image
        }else{
          delete nom["image"]
        }
        nom["slug"]=id

        console.log(nom)
        sousCatService.updateSousCat(nom)
        .then((response) => {
            console.log("UpdateForma",response.data);
            toast.success("Modifications fait avec success");
            // Faire quelque chose avec la réponse
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    let url = BASE(nom.image)
  return (
    <>
    <div className="modal-dialog modal-dialog-centered modal-lg my-5">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Sous-Categorie</h4>
                
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={onSubmit}>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Nom
                    {/* <span className="text-danger">*</span> */}
                  </label>
                  <input type="text" name='nom' onChange={onChange} value={nom.nom} className="form-control" placeholder="Donnez le nom de la sous-categorie" required />
                  {/* <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div> */}
                </div>
                <div className="mb-3 mb-2">
                        <label className="form-label" htmlFor="title">
                        Image de la sous-categorie                        
                        
                        </label>
                        <div>
                        <img src={url} alt="course" className="rounded img-4by3-lg" />
                        </div>
                </div>
                <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                    Image
                    {/* <span className="text-danger">*</span> */}
                  </label>
                  <input type="file" onChange={handleFileChange} className="form-control" />
                  {/* <small>Field must contain a unique value</small>
                  <div className="invalid-feedback">Please enter category.</div> */}
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary">Add New Sous-Categorie</button>
                  
                </div>
              </form>
            </div>
            </div>
        </div>
    </>
  )
}
