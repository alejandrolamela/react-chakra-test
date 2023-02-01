


import axios from "axios"
// Utilizo esta api para enviar un formulario, en formato json
export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString () {
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
}

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    headers: APIHeaders
});
// Si quiero enviar una imagen utilizaria este ya que es multipart form data
export const APIHeaders2 = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString () {
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
}

export const API2 = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    headers: APIHeaders2
});
