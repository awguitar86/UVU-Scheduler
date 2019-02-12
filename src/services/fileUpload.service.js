import axios from 'axios';

function upload(body) {
    return axios
        .post(`http://localhost:8000/upload`, body)
        .then( res => res)
        .catch( err => {throw err});
}

export {
    upload
};