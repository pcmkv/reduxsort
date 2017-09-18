import axios from 'axios';


//dispatch вызывать только в экшенах
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