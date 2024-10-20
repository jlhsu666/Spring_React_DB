import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

class UserService {
    getUsers() {
        return axios.get(API_URL);
    }

    createUser(user) {
        return axios.post(API_URL, user);
    }

    getUserById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    updateUser(id, user) {
        return axios.put(`${API_URL}/${id}`, user);
    }

    deleteUser(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new UserService();
