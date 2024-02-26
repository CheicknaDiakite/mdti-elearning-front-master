import React, { useContext, useState } from 'react'
import { courService } from '../../../_services';
import toast from 'react-hot-toast';
import FormationContext from '../../../components/UseContext/formation.context';

export default function AbonCour({slug, cour}) {
  const { user } = useContext(FormationContext)
    const [nom, setName] = useState('');
    const [ok, setOk] = useState('');

    const onSubmitCour = (e) => {
        e.preventDefault();
    
        const data = {
            montant: cour.prix,
            formation_slug: slug,
            apprenant_id: user,
          };
    
        courService.addCour(data)
          .then((response) => {
            console.log(response.data);
            // navigate('/admin/sous-categorie/index')
            toast.success("Ajout de la chapitre réussie");
            // Faire quelque chose avec la réponse
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
  return (
    <>
    <a href="#" className="btn btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#newCourCatgory">Pour acheter un cour</a>

    {/* Cours */}
    <div className="modal fade" id="newCourCatgory" tabIndex={-1} role="dialog" aria-labelledby="newCourCatgoryLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Cours</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="needs-validation" onSubmit={onSubmitCour}>
                  <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                      Nom du chapitre
                      <span className="text-danger">*</span>
                    </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" value={cour.prix} disabled/>
                    <small>Field must contain a unique value</small>
                    <div className="invalid-feedback">Please enter category.</div>
                  </div>
                  <div className="mb-3 mb-2">
                  <input type="text" name='formation_slug' onChange={(e) => setOk(e.target.value)} className="form-control" value={cour.nom} disabled />
            
                      <div className="invalid-feedback">Please enter valid type_compte.</div>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add New Cour</button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}
