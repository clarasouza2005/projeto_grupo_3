import axios from 'axios';

const RenderAPI = axios.create({
    baseURL:'https://fork-do-servidor-da-clara.onrender.com',
    headers:{
        'Content-Type': 'application/json',
    },
});

export default RenderAPI;