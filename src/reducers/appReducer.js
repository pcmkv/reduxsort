
const listTaskInit = [];

export default function sortApp(state = listTaskInit, action){
    if(action.type === 'GET_DATA'){
        console.log("payload",action.payload);
        state.push(action.payload);
        return action.payload;
    }
    else if(action.type === 'SORT_BY_NAME'){
        console.log( action.payload);
        action.payload.sort((a,b) =>{
            return a.name > b.name
        });
        return state;

    }
    return state;
}

