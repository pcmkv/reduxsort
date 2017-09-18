import {store} from '../index';
export function sortByName() {
    store.dispatch({
        type: 'SORT_BY_NAME',
        payload:this.up = !this.up
    });
}