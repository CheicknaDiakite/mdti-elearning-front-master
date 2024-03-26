import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormationContext from '../../../../components/UseContext/formation.context'
import { useAnc_Document, useAnc_PaieDoc } from '../../../../components/UseContext/useAncien'
import { BASE } from '../../../../_services/caller.service'
import PDFCompo from '../../Fichier/PDFCompo'

export default function Detail() {
    let {id} = useParams()
    const {addPay} = useAnc_PaieDoc()
    const {document} = useAnc_Document(id)
    const { user } = useContext(FormationContext)
    const [nom, setName] = useState([]);
    const [ok, setOk] = useState('');

    const top = {
      utilisateur_id: user,
      document_id: id,
    }
    console.log("ee",top)
    
    const handleContextMenu = (event) => {
      event.preventDefault(); // Annuler le comportement par défaut du clic droit
    };
    
    const onChange = (e) => {
      setName({
          ...nom,
          [e.target.name]: e.target.value
      })
    }
    
    const onSubmitCour = (e) => {
      e.preventDefault();
  
      nom['document_id']= id
      nom['client_id']= user

      addPay(nom)
        
    };

    
        let url = BASE(document.miniature)
        let pdf = BASE(document.document)
        return (
            <>
            <section class="pb-8">
                <div class="container my-5">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-12">
        
                            <div class="card mb-4 shadow-lg card-lift">
                            <div className="mb-5">
                                <h2 className="mb-2">{document.nom}</h2>
                                <p>
                                    Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of
                                    words. Grab a paddle and let’s get started.
                                </p>
                                {/* Img  */}
                                <img src={url} alt="centerimg" className="img-fluid rounded-3 mb-2 mt-3 w-100" onContextMenu={handleContextMenu} />
                                <span>
                                  <button type="button" class="btn btn-outline-warning mx-2" data-bs-toggle="modal" data-bs-target="#paymentModal">Acheter</button>
                                </span>

                                <span>
                                  <button type="button" class="btn btn-outline-secondary mx-1" data-bs-toggle="modal" data-bs-target="#pdfModal">Voir le doc</button>
                                </span>
  
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
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
                      <form className="row mb-4 needs-validation" onSubmit={onSubmitCour} >
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

            {/* Pour le pdf */}
            <div className="modal fade" id="pdfModal" tabIndex={-1} role="dialog" aria-labelledby="pdfModalLabel" aria-hidden="true" onContextMenu={handleContextMenu}>
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header align-items-center d-flex">
                    <h4 className="modal-title" id="paymentModalLabel">Add New Payment Method</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <div>
                      <PDFCompo pdf={pdf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )
    
  
}
