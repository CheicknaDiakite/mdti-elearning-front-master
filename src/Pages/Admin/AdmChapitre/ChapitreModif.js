import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formationChapitre } from '../../../_services';
import toast from 'react-hot-toast';
import { useChapitre } from '../../../components/UseContext/useForma';

export default function ChapitreModif() {
    let {id} = useParams()
    
    const [nom, setName] = useState([]);  
    const {updateChapitre} = useChapitre()
    
    const flag = useRef(false)
    
    const [chap, setchap] = useState([])
    const onChange = (e) => {
        setchap({
            ...chap,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        
        if(flag.current===false){
          formationChapitre.getChapitre(id)
          .then(res => {
            if(res.data.etat===true){
    
              console.log("chapiter ..",res.data.donnee)
              setName(res.data.donnee);
            } else {
              toast.error("Nom trouver");
            }
          })
          .catch(err => console.log(err))
        }
        return () => flag.current = true;;;
        
      },[id]);
      
      const onSubmit = (e) => {
        e.preventDefault();
        
        chap["id"]= id
    
        updateChapitre(chap);
      };
  return (
    <>
    <div className="modal-body">
        <form className="needs-validation" onSubmit={onSubmit}>
        <div className="mb-3 mb-2">
            <label className="form-label" htmlFor="title">
            Nom
            <span className="text-danger">*</span>
            </label>
            <input type="text" name='nom' onChange={onChange} className="form-control" placeholder={nom.nom} />
            <small>Field must contain a unique value</small>
            <div className="invalid-feedback">Please enter category.</div>
        </div>
    
        <div>
            <button type="submit" className="btn btn-primary">Modifier Chapitre</button>
            
        </div>
        </form>
    </div>
    </>
  )
}
