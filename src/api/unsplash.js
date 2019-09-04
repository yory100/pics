import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8712b878b74fe6089838e2222e4be32427b1396a335338b05fe5f3a786b9e932' 
    }
});