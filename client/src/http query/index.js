import axios from "axios";

const $host = axios.create({
    baseURL: 'http://185.190.182.82:5000/'
})

export {
    $host
}