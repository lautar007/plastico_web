

const initialState = {
    ToDo:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'POST_TO_DO':
            initialState.ToDo.push(action.payload)
            return{
                ...state,
            }
        
        case 'DELETE_TO_DO':
            let filterToDo = initialState.ToDo.filter(el => el.tarea !== action.payload);
            console.log(filterToDo)
            return{
                ...state,
                Todo: filterToDo
            }    
        default:
            return state;
    }
}

export default rootReducer;