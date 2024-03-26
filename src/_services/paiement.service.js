import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let payerFormation = (data) => {
    return Axios.post('formation/pay',data)
}

/**
 * Ajout d'un utilisateur
 */
let allPaiement = (data) => {
    return Axios.post('formation/pay/get-historique', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let verifierPaiement = (nom) => {
    return Axios.post('formation/pay-verifier', nom)
}


// Décaraltion des esrvices pour import
export const formationPaiement = {
    payerFormation, allPaiement, verifierPaiement
}

/**
 * Récupératoin de la liste des utilisateurs
 */
let payerDocument = (data) => {
    return Axios.post('ancien-sujet/pay',data)
}

/**
 * Ajout d'un utilisateur
 */
let allDocuPaiement = (data) => {
    return Axios.post('ancien-sujet/pay/get-historique', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let verifierDocuPaiement = (nom) => {
    return Axios.post('ancien-sujet/pay-verifier', nom)
}


// Décaraltion des esrvices pour import
export const documentPaiement = {
    payerDocument, allDocuPaiement, verifierDocuPaiement
}
