import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allQcm = (nom) => {
    
    return Axios.post('formation/qcm/get',nom)
}
let tousQcm = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getQcm = (id) => {
    return Axios.post('formation/qcm/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addQcm = (qc) => {
    return Axios.post('formation/qcm/add',qc)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateQcm = (nom) => {
    return Axios.post('formation/set',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteQcm = (categorie) => {
    return Axios.post(`formation/qcm/del`,categorie)
}

// Décaraltion des esrvices pour import
export const qcmService = {
    allQcm, getQcm, addQcm, updateQcm, deleteQcm, tousQcm
}




let allQuestion = (id) => {
    
    return Axios.post('formation/qcm/question/get',id)
}
let tousQuestion = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getQuestion = (id) => {
    return Axios.post('formation/qcm/question/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addQuestion = (data) => {
    return Axios.post('formation/qcm/question/add',data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateQuestion = (nom) => {
    return Axios.post('formation/set',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteQuestion = (categorie) => {
    return Axios.post(`formation/qcm/question/del`,categorie)
}

// Décaraltion des esrvices pour import
export const questionService = {
    allQuestion, getQuestion, addQuestion, updateQuestion, deleteQuestion, tousQuestion
}




let allReponse = (id) => {
    
    return Axios.post('formation/qcm/reponse/get',id)
}
let tousReponse = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getReponse = (id) => {
    return Axios.post('formation/qcm/reponse/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addReponse = (nom) => {
    return Axios.post('formation/qcm/reponse/add',nom)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateReponse = (nom) => {
    return Axios.post('formation/set',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteReponse = (categorie) => {
    return Axios.post(`formation/qcm/reponse/del`,categorie)
}

// Décaraltion des esrvices pour import
export const reponseService = {
    allReponse, getReponse, addReponse, updateReponse, deleteReponse, tousReponse
}



let allExamen = (id) => {
    
    return Axios.post('formation/qcm/reponse/get',id)
}
let tousExamen = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getExamen = (id) => {
    return Axios.post('formation/qcm/reponse/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addExamen = (nom) => {
    return Axios.post('formation/examen/add',nom)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateExamen = (nom) => {
    return Axios.post('formation/set',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteExamen = (categorie) => {
    return Axios.post(`formation/categorie/del`,categorie)
}

// Décaraltion des esrvices pour import
export const examenService = {
    allExamen, getExamen, addExamen, updateExamen, deleteExamen, tousExamen
}
