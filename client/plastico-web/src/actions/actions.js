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
            url: 'http://localhost:3001/tareas',
        })
        .then(resultado => dispatch({type: 'DELETE_TAREA', payload:resultado}))
        .catch(err => alert(err))
    }
}