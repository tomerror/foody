import axios from 'axios';

export function fetchProducts () {
    return axios
        .get('https://organic-1b028.firebaseio.com/shop.json')
        .then((response) => response.data);
}