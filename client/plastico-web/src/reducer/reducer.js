

const initialState = {
    Tareas: [],
    Artistico: [],
    Comercial: [],
    Noticia: [],
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
        case 'GET_PUBLICACIONES':
            let artistico = action.payload.filter(pub => pub.categoria === 'artistico');
            let comercial = action.payload.filter(pub => pub.categoria === 'comercial');
            let noticia = action.payload.filter(pub => pub.categoria === 'noticia');
            return{
                ...state,
                Artistico: artistico,
                Comercial: comercial,
                Noticia: noticia
            }
        default:
            return state;
    }
}

export default rootReducer;