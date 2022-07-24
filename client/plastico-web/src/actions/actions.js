import axios from 'axios';

export function postTarea(payload){
    return async function (dispatch){
        const data = await axios.post('/tareas', payload);
        return data;
    }
}


export function getTareas(){
    return async function(dispatch){
        var json = await axios.get('/tareas');
        return dispatch({
            type: 'GET_TAREAS',
            payload: json.data
        })
    }
}

export function deleteTarea(tarea){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            data:{tarea: tarea},
            url: '/tareas',
        })
        .then(resultado => dispatch({type: 'DELETE_TAREA', payload:resultado}))
        .catch(err => alert(err))
    }
}

export function deletePost(titulo){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            data:{titulo: titulo},
            url: '/publicaciones',
        })
        .then(resultado => dispatch({type: 'DELETE_POST', payload:resultado}))
        .catch(err => alert(err))
    }
}

export function postPublicacion(payload){
    return async function (dispatch){
        const data = await axios({
            method: "POST",
            data: {
                titulo: payload.titulo,
                fecha: payload.fecha,
                contenido: payload.contenido,
                imagen: payload.imagen,
                categoria: payload.categoria,
                galeria: payload.galeria,
                subtitulo: payload.subtitulo
            },
            url: '/publicaciones'
        })
        return data;
    }
}

export function getPublicaciones(){
    return async function(dispatch){
        var json = await axios.get('/publicaciones');
        return dispatch({
            type: 'GET_PUBLICACIONES',
            payload: json.data
        })
    }
}

export function getPublicacion(id){
    return async function(dispatch){
        var json = await axios.get('/publicaciones/' + id);
        return dispatch({
            type: 'GET_PUBLICACION',
            payload: json.data
        })
    }
}

export function putPublicacion(id, payload){
    return async function (dispatch){
        const data = await axios({
            method: 'PUT',
            data: {
                titulo: payload.titulo,
                fecha: payload.fecha,
                contenido: payload.contenido,
                imagen: payload.imagen,
                categoria: payload.categoria,
                galeria: payload.galeria,
                subtitulo: payload.subtitulo
            },
            url: ('/publicaciones/' + id) 
        })
        return dispatch({
            type: 'PUT_PUBLICACION',
            payload: data
        })
    }
}

export function postCandidatos(payload){
    return async function (dispatch){
        const data = await axios({
            method: 'POST',
            data:{
                nombre: payload.nombre,
                edad: payload.edad,
                mail: payload.mail,
                telefono: payload.telefono,
                newsletter: payload.newsletter,
                pasantia: payload.pasantia
            },
            url:'/candidatos'
        })
        return data;
    }
}

export function getPasantes(){
    return async function(dispatch){
        var json = await axios.get('/candidatos');
        return dispatch({
            type: 'GET_PASANTES',
            payload: json.data
        })
    }
}

export function deletePasante(nombre){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            data:{nombre: nombre},
            url: '/candidatos',
        })
        .then(resultado => dispatch({type: 'DELETE_PASANTE', payload:resultado}))
        .catch(err => alert(err))
    }
}

export function deletePortada(){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            url:'/portada',
        })
        .then(resultado => dispatch({type: 'DELETE_PORTADA', payload:resultado}))
        .catch(err => alert(err))
    }
}

export function postPortada(payload){
    return async function (dispatch){
        const data = await axios({
            method: 'POST',
            data:{
                imagenA: payload.imagenA,
                imagenB: payload.imagenB
            },
            url:'/portada'
        })
        return data;
    }
}

export function getPortada(){
    return async function(dispatch){
        var json = await axios.get('/portada');
        return dispatch({
            type: 'GET_PORTADA',
            payload: json.data
        })
    }
}

export function postMensajes(payload){
    return async function (dispatch){
        const data = await axios({
            method: 'POST',
            data:{
                nombre: payload.nombre,
                mail: payload.mail,
                telefono: payload.telefono,
                mensaje: payload.mensaje,
            },
            url:'/mensajes'
        })
        return data;
    }
}

export function getMensajes(){
    return async function(dispatch){
        var json = await axios.get('/mensajes');
        return dispatch({
            type: 'GET_MENSAJES',
            payload: json.data
        })
    }
}

export function deleteMensaje(nombre){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            data:{nombre: nombre},
            url: '/mensajes',
        })
        .then(resultado => dispatch({type: 'DELETE_MENSAJE', payload:resultado}))
        .catch(err => alert(err))
    }
}