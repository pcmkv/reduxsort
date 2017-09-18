
const listTaskInit = [];

export default function sortApp(state = listTaskInit, action){
    if(action.type === 'GET_DATA'){
        console.log("payload",action.payload);
        state.push(action.payload);
        return action.payload;
    }
    else if(action.type === 'SORT_BY_NAME') {
        console.log("payload",action.payload);
        state.sort((a, b) => {
            return action.payload ? a.name < b.name : a.name > b.name;
        });
        return [...state];
        /*if(action.payload === true){
            state.sort((a, b) => {
                return a.name > b.name;

            });
            return [...state];
        }
        else{
            state.sort((a, b) => {
                return a.name < b.name;

            });
            return [...state];
        }*/

    }
    return state;
}

