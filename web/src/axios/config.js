import axios from "axios";

const tarefaFetch = axios.create({
    baseURL: "https://localhost:5001"
});

export default tarefaFetch