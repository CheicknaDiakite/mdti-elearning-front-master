import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allFormation = (user) => {
    return Axios.post('formation/get',user)
}
let tousFormation = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getFormation = (id) => {
    return Axios.post('formation/categorie/set',id)
}
let unFormation = (slug) => {
    return Axios.get(`http://127.0.0.1:8000/formation/get/${slug}`)
}

/**
 * Ajout d'un utilisateur
 */
let addFormation = (data) => {
    return Axios.post('formation/add',data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateFormation = (nom) => {
    return Axios.post('formation/set',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteFormation = (categorie) => {
    return Axios.post(`formation/del`,categorie)
}

// Décaraltion des esrvices pour import
export const formationService = {
   unFormation, allFormation, getFormation, addFormation, updateFormation, deleteFormation, tousFormation
}



// Pour les chapitres

let allChapitre = (slug) => {
    return Axios.post('formation/chapitre/get',slug)
}
let tousChapitre = () => {
    return Axios.get('formation/chapitre/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getChapitre = (id) => {
    return Axios.post('formation/chapitre/get/{id}')
}

/**
 * Ajout d'un utilisateur
 */
let addChapitre = (ajout) => {
    return Axios.post('formation/chapitre/add',ajout)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateChapitre = (user) => {
    return Axios.post('formation/chapitre/set'+user.id, user)
}

/**
 * Suppression d'un utilsateur
 */
let deleteChapitre = (categorie) => {
    return Axios.post(`formation/del_chapitre/set`,categorie)
}

// Décaraltion des esrvices pour import
export const formationChapitre = {
    allChapitre, getChapitre, addChapitre, updateChapitre, deleteChapitre, tousChapitre
}


// Pour les chapitres

let allSeance = (slug) => {
    return Axios.post('formation/chapitre/get',slug)
}
let tousSeance = () => {
    return Axios.get('formation/chapitre/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getSeance = (id) => {
    return Axios.post('formation/chapitre/get/{id}')
}

/**
 * Ajout d'un utilisateur
 */
let addSeance = (ajout) => {
    return Axios.post('formation/seancetravail/add',ajout)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateSeance = (user) => {
    return Axios.post('formation/chapitre/set'+user.id, user)
}

/**
 * Suppression d'un utilsateur
 */
let deleteSeance = (categorie) => {
    return Axios.post(`formation/chapitre/set`,categorie)
}

// Décaraltion des esrvices pour import
export const seanceTravail = {
    allSeance, getSeance, addSeance, updateSeance, deleteSeance, tousSeance
}