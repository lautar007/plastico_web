import React from 'react';
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, postToDo } from '../actions/actions';

export default function ToDo (){

    const dispatch = useDispatch();

    const list = useSelector((state)=> state.ToDo)
    console.log(list)

    const [input, setInput] = useState(
        {
            fecha:'',
            hora:'',
            tarea:'',
            admin:'',
            hecho: false,
        }
    )

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        dispatch(postToDo(input));
        //document.reload()
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteToDo(e.target.value))
    }

    return(
        <div>
            <div>
                <h1>Lista de Tareas</h1>
            </div>
            <div>
                <h2>Crear una nueva tarea:</h2>
            </div>
            <div>
                <form>
                    <label>Fecha:</label>
                    <input
                      type = 'date'
                      value={input.fecha}
                      name = 'fecha'
                      onChange={(e)=> handleChange(e)}
                    />

                    <label>Hora:</label>
                    <input
                      type = 'text'
                      value={input.hora}
                      name = 'hora'
                      onChange={(e)=> handleChange(e)}
                    />

                    <label>Tarea:</label>
                    <input
                      type = 'text'
                      value={input.tarea}
                      name = 'tarea'
                      onChange={(e)=> handleChange(e)}
                    />

                    <label>¿Quien la debe cumplir?:</label>
                    <input
                      type = 'text'
                      value={input.admin}
                      name = 'admin'
                      onChange={(e)=> handleChange(e)}
                    />

                    <button onClick={(e) => handleSubmit(e)}>Crear Tarea</button>
                </form>
            </div>
            {
                list && list.map((el)=>{
                    let estado = 'terminado';
                    if(el.hecho === false){
                        estado = 'pendiente'
                    };

                    return(
                        <div key={el.fecha}>
                            <h6>Fecha:</h6>
                            <p>{el.fecha}</p>
                            <h6>Hora:</h6>
                            <p>{el.hora}</p>
                            <h6>Tarea:</h6>
                            <p>{el.tarea}</p>
                            <h6>Responsable:</h6>
                            <p>{el.admin}</p>
                            <h6>Estado:</h6>
                            <p>{estado}</p>
                            <button value={el.tarea} onClick={(e) => handleDelete(e)}>Eliminar tarea</button>
                        </div>
                    )
                })
            }
        </div>
    )
}