import axios from 'axios';
const ruta = 'http://localhost:3001'

export function postTarea(payload){
    return async function (dispatch){
        const data = await axios.post(ruta +'/tareas', payload);
        return data;
    }
}


export function getTareas(){
    return async function(dispatch){
        var json = await axios.get(ruta +'/tareas');
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
            url: ruta + '/tareas',
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
            url: ruta + '/publicaciones',
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
            url: ruta + '/publicaciones'
        })
        return data;
    }
}

export function getPublicaciones(){
    return async function(dispatch){
        var json = await axios.get(ruta +'/publicaciones');
        return dispatch({
            type: 'GET_PUBLICACIONES',
            payload: json.data
        })
    }
}

export function getPublicacion(id){
    return async function(dispatch){
        var json = await axios.get(ruta + '/publicaciones/' + id);
        return dispatch({
            type: 'GET_PUBLICACION',
            payload: json.data
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
            url: ruta + '/candidatos'
        })
        return data;
    }
}

export function getPasantes(){
    return async function(dispatch){
        var json = await axios.get(ruta +'/candidatos');
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
            url: ruta + '/candidatos',
        })
        .then(resultado => dispatch({type: 'DELETE_PASANTE', payload:resultado}))
        .catch(err => alert(err))
    }
}

export function deletePortada(){
    return async function(dispatch){
        const data = await axios({
            method: "DELETE",
            url: ruta + '/portada',
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
            url: ruta + '/portada'
        })
        return data;
    }
}

export function getPortada(){
    return async function(dispatch){
        var json = await axios.get(ruta +'/portada');
        return dispatch({
            type: 'GET_PORTADA',
            payload: json.data
        })
    }
}