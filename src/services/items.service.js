import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getAllItems = async () => {
    console.log('getAllItems')
    const response = await api.get('/items')
    return response.data
}

export const publish = async (newItemData) => {
    const response = await api.post('/items/publish',newItemData)
    return response.data
}