import axios from 'axios';

import {store} from '../index';
export function getUserInfo() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            store.dispatch({
                type: 'GET_DATA',
                payload: res.data
            });
        });

}