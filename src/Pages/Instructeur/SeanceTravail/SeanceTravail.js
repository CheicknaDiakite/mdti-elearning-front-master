import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { formationService, seanceTravail } from '../../../_services';
import toast from 'react-hot-toast';
import FormationContext from '../../../components/UseContext/formation.context';

export default function SeanceTravail() {
  const { user } = useContext(FormationContext)
    let {slug} = useParams()
    const [nom, setName] = useState('');
    const [ok, setOk] = useState('');

    const {
        data: formation,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["formations", slug],
        queryFn: () =>
        formationService.unFormation(slug)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const cour = formation.donnee

      console.log('hhbbjj',slug)

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
            // };
            
            // nom["montant"]= cour.prix
            nom["formation_slug"]= slug
            nom["apprenant_id"]= user
            nom["confirmer_par_apprenant"]= true

            console.log("ookk",nom)
        
            seanceTravail.addSeance(nom)
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
    {/* Card */}
    <div className="card border-0">
    {/* Card header */}
    <div className="card-header d-lg-flex justify-content-between align-items-center">
        <div className="mb-3 mb-lg-0">
        <h3 className="mb-0">Pour prendre une seance de travail pour cet formation : {cour.nom}</h3>
        {/* <p className="mb-0">Here is list of package/product that you have subscribed.</p> */}
        </div>
        <div>
        <a href="pricing.html" className="btn btn-success btn-sm">Le prix de la formation ${cour.prix}</a>
        </div>
    </div>
    {/* Card body */}
    <div className="card-body">
        <div className="border-bottom pt-0 pb-5">
        <div className="row mb-4">
            <div className="col-lg-6 col-md-8 col-7 mb-2 mb-lg-0">
            <span className="d-block">
                <span className="h4">{cour.nom}</span>
                {/* <span className="badge bg-success ms-2">Active</span> */}
            </span>
            {/* <p className="mb-0 fs-6">Subscription ID: #100010002</p> */}
            </div>
            <div className="col-lg-3 col-md-4 col-5 mb-2 mb-lg-0">
            {/* Custom Switch */}
            {/* <span>Auto Renewal</span>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                <label className="form-check-label" htmlFor="customSwitch1" />
            </div> */}
            </div>
            <div className="col-lg-3 col-md-12 col-12 d-lg-flex align-items-start justify-content-end">
            <a href="#" className="btn btn-outline-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#newSeanceCatgory">Cliquez ici.</a>
            </div>
        </div>
        {/* Pricing data */}
        <div className="row">
            <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">date ajout</span>
            <h6 className="mb-0">{cour.date}</h6>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">profile_destine</span>
            <h6 className="mb-0">{cour.profile_destine}</h6>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">Nombre Heur</span>
            <h6 className="mb-0">{cour.nombre_heur}</h6>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
            <span className="fs-6">prerequis</span>
            <h6 className="mb-0">{cour.prerequis}</h6>
            </div>
        </div>
        </div>
        
    </div>
    </div>

    {/* Cours */}
    <div className="modal fade" id="newSeanceCatgory" tabIndex={-1} role="dialog" aria-labelledby="newSeanceCatgoryLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Seance Travel</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="needs-validation" onSubmit={onSubmitCour}>
                  <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                      Nom du seance
                      <span className="text-danger">*</span>
                    </label>
                    <input type="text" name='nom' onChange={onChange} className="form-control" />
                    {/* <small>Field must contain a unique value</small> */}
                    {/* <div className="invalid-feedback">Please enter category.</div> */}
                  </div>
                  <div className="mb-3 mb-2">
                    <label className="form-label" htmlFor="title">
                      Lien du seance
                      <span className="text-danger">*</span>
                    </label>
                    <input type="text" name='lien_de_la_reunion' onChange={onChange} className="form-control" />
                    {/* <small>Field must contain a unique value</small> */}
                    {/* <div className="invalid-feedback">Please enter category.</div> */}
                  </div>
                  <div className="mb-3 mb-2">
                  <label className="form-label" htmlFor="title">
                      Date de la reunion du seance
                      <span className="text-danger">*</span>
                    </label>
                  <input type="date" name='date_de_la_reunion' onChange={onChange} className="form-control" />
            
                      {/* <div className="invalid-feedback">Please enter valid type_compte.</div> */}
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary">Add New Seance Travel</button>
                    <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>

    </>
  )
}
