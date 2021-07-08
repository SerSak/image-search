import axios from 'axios'

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID n48TBU3g3cRFULRUOsxgQt0FtloAn7FhdEwAOR8JlfE'
    }

});




