

const initialState = {
    Tareas: [],
    Artistico: [],
    Comercial: [],
    Noticia: [],
    Publicacion:{},
    Candidatos: [],
    Portada: [],
    Mensajes: []
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
            let art = artistico.reverse();
            let com = comercial.reverse();
            return{
                ...state,
                Artistico: art,
                Comercial: com,
                Noticia: noticia
            }
        case 'GET_PUBLICACION':
            return{
                ...state,
                Publicacion: action.payload[0]
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
        case 'PUT_PUBLICACION':
            console.log(action.payload)
            return{
                ...state
            }
        case 'GET_MENSAJES':
            return{
                ...state,
                Mensajes: action.payload
            }
        case 'DELETE_MENSAJE':
                return{
                    ...state
                }

        default:
            return state;
    }
}

export default rootReducer;