const listTaskInit = [];

export default function sortApp(state = listTaskInit, action){
    if(action.type === 'GET_DATA'){
        return [
            ...state
        ]
    }
    return state;
}

