import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categorieService } from '../../../_services';
import toast from 'react-hot-toast';

export default function ChapitreEdit() {

  
  const [base64Image, setBase64Image] = useState('');
  let {id} = useParams()
  const flag = useRef(false)
  const [nom, setName] = useState([]);
  let navigate = useNavigate()

  useEffect(()=>{
    // console.log('text 0')

    if(flag.current===false){
      categorieService.getCategorie(id)
      .then(res => {
        console.log("fff", res.data.donnee)
        setName(res.data.donnee)
      })
      .catch(err => console.log(err))
    }

    return () => flag.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convertir l'image en base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onChange = (e) => {
    setName({
      ...nom,
      [e.target.name]: e.target.value
  })

  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Créer un objet à envoyer au serveur
    // 
    if(base64Image.includes("base64"))
      {
        nom["image"] = base64Image
      }else{
        delete nom["image"]
      }

    categorieService.updateCategorie(nom)
      .then((response) => {
        console.log(response.data);
        navigate('/admin/categorie/index')
        toast.success("Modification réussie");
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <section className="container-fluid p-4">
      <div className="modal-body">
        <form className="needs-validation" onSubmit={onSubmit}>
          <div className="mb-3 mb-2">
            <label className="form-label" htmlFor="title">
              Title
              <span className="text-danger">*</span>
            </label>
            <input type="text" name='nom' value={nom.nom} onChange={onChange} className="form-control" placeholder="Write a Category" required />
            <small>Field must contain a unique value</small>
            <div className="invalid-feedback">Please enter category.</div>
          </div>
          <div className="mb-3 mb-2">
            <label className="form-label" htmlFor="title">
              Image
              <span className="text-danger">*</span>
            </label>
            <input type="file" onChange={handleFileChange} className="form-control" placeholder="Write a Category" required />
            <small>Field must contain a unique value</small>
            <div className="invalid-feedback">Please enter category.</div>
          </div>
          
          <div>
            <button type="submit" className="btn btn-primary">Add New Category</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </form>
      </div>
    </section>
  )
}
