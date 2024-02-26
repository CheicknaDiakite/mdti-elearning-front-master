import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allTemoin = (user) => {
    return Axios.post('formation/temoignages/get/sans-m',user)
}
let tousTemoin = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getTemoin = (id) => {
    return Axios.post('formation/categorie/set',id)
}

/**
 * Ajout d'un utilisateur
 */
let addTemoin = (discut) => {
    return Axios.post('formation/temoignages/add',discut)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateTemoin = (nom) => {
    return Axios.post('formation/video/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteTemoin = (categorie) => {
    return Axios.post(`formation/categorie/del`,categorie)
}

// Décaraltion des esrvices pour import
export const temoinService = {
    allTemoin, getTemoin, addTemoin, updateTemoin, deleteTemoin, tousTemoin
}


/**
 * Récupératoin de la liste des utilisateurs
 */
let allSlider = () => {
    return Axios.post('slider/get')
}
let tousSlider = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getSlider = (id) => {
    return Axios.post('formation/categorie/set',id)
}

/**
 * Ajout d'un utilisateur
 */
let addSlider = (discut) => {
    return Axios.post('slider/add',discut)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateSlider = (nom) => {
    return Axios.post('formation/video/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteSlider = (categorie) => {
    return Axios.post(`slider/del`,categorie)
}

// Décaraltion des esrvices pour import
export const sliderService = {
    allSlider, getSlider, addSlider, updateSlider, deleteSlider, tousSlider
}
