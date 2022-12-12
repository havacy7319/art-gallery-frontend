import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const signUp = async (newUserData) => {
    const response = await api.post('/auth/signup',newUserData)
    return response.data
}

export const login = async (loginData) => {
    const response = await api.post('/auth/login',loginData)
    return response.data
}

export const updateProfile = async (id,profileData) => {
    const response = await api.put(`/users/${id}`,profileData)
    return response.data
}