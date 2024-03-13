import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allDiscution = (top) => {
    return Axios.post('formation/discution/get',top)
}
let tousDiscution = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getDiscution = (id) => {
    return Axios.post('formation/discution/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addDiscution = (discut) => {

    return Axios.post('formation/discution/add',discut)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateDiscution = (nom) => {
    return Axios.post('formation/video/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteDiscution = (post) => {
    return Axios.post(`formation/discution/del`,post)
}

// Décaraltion des esrvices pour import
export const discutionService = {
    allDiscution, getDiscution, addDiscution, updateDiscution, deleteDiscution, tousDiscution
}

// Pour les cours

/**
 * Récupératoin de la liste des utilisateurs
 */
let allCour = (slug) => {
    return Axios.post('formation/cour/get',slug)
}
let tousCour = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getCour = (id) => {
    return Axios.post('formation/categorie/set',id)
}

/**
 * Ajout d'un utilisateur
 */
let addCour = (cour) => {
    return Axios.post('formation/cour/add',cour)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateCour = (nom) => {
    return Axios.post('formation/video/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteCour = (post) => {
    console.log("hhhhh",post)
    return Axios.post(`formation/cour/del`,post)
}

// Décaraltion des esrvices pour import
export const courService = {
    allCour, getCour, addCour, updateCour, deleteCour, tousCour
}
// Pour les suives

/**
 * Récupératoin de la liste des utilisateurs
 */
let allSuive = (slug) => {
    return Axios.post('formation/suive/get',slug)
}
let tousSuive = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getSuive = (id) => {
    return Axios.post('formation/suive/set',id)
}

/**
 * Ajout d'un utilisateur
 */
let addSuive = (cour) => {
    return Axios.post('formation/suive/add',cour)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateSuive = (nom) => {
    return Axios.post('formation/suive/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteSuive = (post) => {
    console.log("hhhhh",post)
    return Axios.post(`formation/suive/del`,post)
}

// Décaraltion des esrvices pour import
export const suiveService = {
    allSuive, getSuive, addSuive, updateSuive, deleteSuive, tousSuive
}
