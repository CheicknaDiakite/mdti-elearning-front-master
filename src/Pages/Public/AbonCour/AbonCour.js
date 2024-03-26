import React, { useContext, useState } from 'react'
import { courService } from '../../../_services';
import toast from 'react-hot-toast';
import FormationContext from '../../../components/UseContext/formation.context';
import { useAnc_PaieForm } from '../../../components/UseContext/useAncien';

export default function AbonCour({slug, cour}) {
  const { user } = useContext(FormationContext)
  const {addPay} = useAnc_PaieForm()
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
  
      nom['formation_id']= cour.id
      nom['client_id']= user

      console.log(nom)
      addPay(nom)
    };
  return (
    <>
    <a href="#" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">Pour acheter un cour</a>

    {/* Modal Cours */}
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

    {/* Payment Modal */}
    <div className="modal fade" id="paymentModal" tabIndex={-1} role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header align-items-center d-flex">
            <h4 className="modal-title" id="paymentModalLabel">Add New Payment Method</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div>
              {/* Form */}
              <form className="row mb-4 needs-validation" onSubmit={onSubmitCour}>
                <div className="mb-3 col-12 col-md-12 mb-4">
                  <h5 className="mb-3">Credit / Debit card</h5>
                    
                  {/* Radio button */}
                  <div className="d-inline-flex mb-3">                    
                    <label class="form-label" for="year">Choisissez voutre methode de paiement</label>
                    <select class="form-select" name='moyen_paiement' onChange={onChange} required>
                      <option >...</option>
                      <option value="Orange Money">Orange Money</option>
                      <option value="Moov Money">Moov Money</option>
                      <option value="Carte Visa">Carte Visa</option>
                      <option value="Sama Money">Sama Money</option>                      
                    </select>                  
                  </div>
                </div>
                {/* Name on card */}
                <div className="mb-3 col-12 col-md-4">
                  <label htmlFor="nameoncard" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' onChange={onChange} placeholder="Name" required />
                  <div className="invalid-feedback">Please enter name of card.</div>
                </div>
                {/* Month */}
                <div className="mb-3 col-12 col-md-4">
                  <label htmlFor="nameoncard" className="form-label">Montant</label>
                  <input type="number" className="form-control" name='montant' onChange={onChange} placeholder="Montant" required />
                  <div className="invalid-feedback">Please enter name of card.</div>
                </div>
                {/* Year */}
                <div className="mb-3 col-12 col-md-4">
                  <label htmlFor="nameoncard" className="form-label">Numero</label>
                  <input type="text" className="form-control" name='numero' onChange={onChange} placeholder="Numero" required />
                  <div className="invalid-feedback">Please enter name of card.</div>
                </div>
                {/* Card number */}
                <div className="mb-3 col-md-8 col-12">
                  <label className="form-label" htmlFor="card-mask">Description</label>
                  <input className="form-control" type="text" name='description' onChange={onChange} />
                  <div className="invalid-feedback">Please enter card number.</div>
                </div>
                {/* CVV */}
                {/* <div className="mb-3 col-md-4 col-12">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="digit-mask">
                      CVV Code
                      <i className="fe fe-help-circle ms-1" data-bs-toggle="tooltip" data-placement="top" title="A 3 - digit number, typically printed on the back of a card." />
                    </label>
                    <input className="form-control" id="digit-mask" type="text" defaultValue required />
                    <div className="invalid-feedback">Please enter cvv code.</div>
                  </div>
                </div> */}
                {/* Button */}
                <div className="col-md-6 col-12">
                  <button className="btn btn-primary" type="submit">Add New Card</button>
                  <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
              <span>
                <strong>Note:</strong>
                that you can later remove your card at the account setting page.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
