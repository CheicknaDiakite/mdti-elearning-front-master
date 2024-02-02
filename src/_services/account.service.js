import Axios from "./caller.service"


let addUser = (user) => {
    return Axios.put('utilisateur/inscription', user)
}
let register = (user) => {
    return Axios.post('utilisateur/inscription', user)
}

let getUser =(id) => {
    return Axios.post(`utilisateur/profile/get/${id}`)
}
let unUser = (credentials) => {
    return Axios.get('utilisateur/profile/get/',credentials)
}

let allUsers = () => {
    return Axios.get('utilisateur/get')
}

let updateUser = (post) => {
    return Axios.post('utilisateur/profile/set/',post)
}




let saveToken = (token) => {
    localStorage.setItem('token',token)
}

let login =(credentials) => {
    return Axios.post('/utilisateur/connexion', credentials)
}
let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

export const accountService = {
   login, saveToken, logout, isLogged, getToken, addUser,
   getUser, unUser, allUsers, updateUser, register
}