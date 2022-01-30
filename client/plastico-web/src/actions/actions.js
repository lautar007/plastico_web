export function postToDo (input){
    console.log(input);
    return{
        type: 'POST_TO_DO',
        payload: input,
    }
}

export function deleteToDo(tarea){
    console.log(tarea)
    return{
        type: 'DELETE_TO_DO',
        payload: tarea
    }
}