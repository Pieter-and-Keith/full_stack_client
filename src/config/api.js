import axios from 'axios';

const full_stack_server = axios.create({
    baseURL: 'http://localhost:3000'
})

export default full_stack_server;