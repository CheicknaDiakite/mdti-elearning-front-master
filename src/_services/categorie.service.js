import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allCategorie = () => {
    return Axios.post('formation/categorie/get')
}

/**
 * Récupération d'un utilisateur
 */
let getCategorie = (id) => {
    return Axios.get(`formation/categorie/get/${id}`)
}

/**
 * Ajout d'un utilisateur
 */
let addCategorie = (data) => {
    return Axios.post('formation/categorie/add', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateCategorie = (nom) => {
    return Axios.post('formation/categorie/set', nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteCategorie = (categorie) => {
    return Axios.post(`formation/categorie/del`,categorie)
}

// Décaraltion des esrvices pour import
export const categorieService = {
    allCategorie, getCategorie, addCategorie, updateCategorie, deleteCategorie
}


/**
 * Récupératoin de la liste des utilisateurs
 */
let allSousCat = () => {
    return Axios.post('formation/sous-categorie/get')
}

/**
 * Récupération d'un utilisateur
 */
let getSousCat = (sluger) => {
    return Axios.post(`formation/sous-categorie/get`,sluger)
}
let unSousCat = (id) => {
    // console.log("id ...",id)
    return Axios.get(`formation/sous-categorie/get/${id}`)
}

/**
 * Ajout d'un utilisateur
 */
let addSousCat = (data) => {
    return Axios.post('formation/sous-categorie/add', data)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateSousCat = (data) => {
    return Axios.post('formation/sous-categorie/set',data)
}

/**
 * Suppression d'un utilsateur
 */
let deleteSousCat = (post) => {
    return Axios.post(`formation/sous-categorie/del`,post)
}

// Décaraltion des esrvices pour import
export const sousCatService = {
    allSousCat, getSousCat, addSousCat, updateSousCat, deleteSousCat, unSousCat
}