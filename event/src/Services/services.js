import axios from "axios";
const apiPorta = "5289"
//apiLocal: vai receber o endereço da API
const apiLocal = `http://localhost:${apiPorta}/api`
const api = axios.create({
    baseURL: apiLocal
});
export default api;