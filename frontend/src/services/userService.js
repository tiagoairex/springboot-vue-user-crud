import axios from "axios"

const API_URL = "http://localhost:8080/users"

export default {

    getUsers() {
        return axios.get(API_URL)
    },

    createUser(user) {
        return axios.post(API_URL, user)
    },

    updateUser(id, user) {
        return axios.put(`${API_URL}/${id}`, user)
    },

    deleteUser(id) {
        return axios.delete(`${API_URL}/${id}`)
    }

}