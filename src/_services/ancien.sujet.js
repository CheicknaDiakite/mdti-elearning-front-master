import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allType = () => {
    return Axios.post('ancien-sujet/type/get')
}

/**
 * Récupération d'un utilisateur
 */
let getType = (id) => {
    return Axios.get(`ancien-sujet/type/get/${id}`)
}

/**
 * Ajout d'un utilisateur
 */
let addType = (data) => {
    return Axios.post('ancien-sujet/type/add', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateType = (nom) => {
    return Axios.post('ancien-sujet/type/add', nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteType = (categorie) => {
    return Axios.post(`ancien-sujet/type/del`,categorie)
}

// Décaraltion des esrvices pour import
export const ancienType = {
    allType, getType, addType, updateType, deleteType
}


/**
 * Récupératoin de la liste des utilisateurs
 */
let allNiveau = () => {
    return Axios.post('ancien-sujet/niveau/get')
}

/**
 * Récupération d'un utilisateur
 */
let getNiveau = (id) => {
    return Axios.get(`formation/categorie/get/${id}`)
}

/**
 * Ajout d'un utilisateur
 */
let addNiveau = (data) => {
    return Axios.post('ancien-sujet/niveau/add', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateNiveau = (nom) => {
    console.log('rr',nom)
    return Axios.post(`ancien-sujet/niveau/set`,nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteNiveau = (categorie) => {
    return Axios.post(`ancien-sujet/niveau/del`,categorie)
}

// Décaraltion des esrvices pour import
export const ancienNiveau = {
    allNiveau, getNiveau, addNiveau, updateNiveau, deleteNiveau
}

/**
 * Récupératoin de la liste des utilisateurs
 */
let allMatiere = () => {
    return Axios.post('ancien-sujet/matiere/get')
}

/**
 * Récupération d'un utilisateur
 */
let getMatiere = (id) => {
    return Axios.get(`formation/categorie/get/${id}`)
}

/**
 * Ajout d'un utilisateur
 */
let addMatiere = (data) => {
    return Axios.post('ancien-sujet/matiere/add', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateMatiere = (nom) => {
    console.log('rr',nom)
    return Axios.post(`ancien-sujet/niveau/set`,nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteMatiere = (categorie) => {
    return Axios.post(`ancien-sujet/matiere/del`,categorie)
}

// Décaraltion des esrvices pour import
export const ancienMatiere = {
    allMatiere, getMatiere, addMatiere, updateMatiere, deleteMatiere
}