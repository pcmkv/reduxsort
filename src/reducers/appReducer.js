import * as test  from "../actions/getData";

const listTaskInit = [];

export default function sortApp(state = listTaskInit, action){
    if(action.type === 'GET_DATA'){
        console.log("payload",action.payload);
        state.push(action.payload);
        return [
            action.payload
        ]
    }
    return state;
}

