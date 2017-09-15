import axios from 'axios';

import {store} from '../index';
export function getUserInfo() {
    let getData = null;
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log("RES",res.data);
            getData = res;
        });
    store.dispatch({
        type: 'GET_DATA',
        payload: getData
    });
}