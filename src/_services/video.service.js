import Axios from './caller.service'

/**
 * Récupératoin de la liste des utilisateurs
 */
let allVideo = (id) => {
    return Axios.post('formation/video/get',id)
}
let tousVideo = () => {
    return Axios.post('formation/get-all')
}

/**
 * Récupération d'un utilisateur
 */
let getVideo = (id) => {
    return Axios.post('formation/video/get',id)
}

/**
 * Ajout d'un utilisateur
 */
let addVideo = (video) => {
    console.log("hhhh",video)
    
    return Axios.post('formation/video/add',video)
}

/**
 * Mise à jour d'un utilisateur
 */
let updateVideo = (nom) => {
    return Axios.post('formation/video/add',nom)
}

/**
 * Suppression d'un utilsateur
 */
let deleteVideo = (categorie) => {
    return Axios.post(`formation/video/del`,categorie)
}

// Décaraltion des esrvices pour import
export const videoService = {
    allVideo, getVideo, addVideo, updateVideo, deleteVideo, tousVideo
}
