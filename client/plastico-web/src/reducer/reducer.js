

const initialState = {
    Tareas: [],
    Artistico: [],
    Comercial: [],
    Noticia: [],
    Publicacion:{},
    Candidatos: [],
    Portada: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_TAREAS':
            return{
                ...state,
                Tareas: action.payload
            }
        case 'DELETE_TAREA':
            return{
                ...state
            }
        case 'DELETE_POST':
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
        case 'GET_PUBLICACION':
            return{
                ...state,
                Publicacion: action.payload
            }
        case 'GET_PASANTES':
            return{
                ...state,
                Candidatos: action.payload
            }
        case 'DELETE_PASANTE':
            return{
                ...state
            }
        case 'GET_PORTADA':
            return{
                ...state,
                Portada: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;