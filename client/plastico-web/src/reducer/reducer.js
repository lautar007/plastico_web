

const initialState = {
    Tareas:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_TAREAS':
            return{
                ...state,
                Tareas: action.payload
            }
        case 'DELTE_TAREA':
            return{
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;