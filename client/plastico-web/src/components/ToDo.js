import React from 'react';
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTarea, getTareas, deleteTarea } from '../actions/actions';
import './ToDo.css';

export default function ToDo (){

    const dispatch = useDispatch();
    const list = useSelector((state)=> state.Tareas)

    useEffect(()=>{
        dispatch(getTareas()); 
    }, [dispatch]);


    const [input, setInput] = useState(
        {
            fecha:'',
            hora:'',
            tarea:'',
            estado: 'pendiente'
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
        dispatch(postTarea(input));
        window.location.reload();
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteTarea(e.target.value));
        window.location.reload();
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

                    <button onClick={(e) => handleSubmit(e)}>Crear Tarea</button>
                </form>
            </div>
            {
                list && list.map((el)=>{
                    return(
                        <div key={el.id} className='cont-tarea'>
                            <div>
                                <h6>Fecha:</h6>
                                <p>{el.fecha}</p>
                            </div>
                            <div>
                                <h6>Hora:</h6>
                                <p>{el.hora}</p>
                            </div>
                            <div>
                                <h6>Tarea:</h6>
                                <p>{el.tarea}</p>
                            </div>
                            <div>
                                <h6>Estado:</h6>
                                <button>{el.estado}</button>
                            </div>
                            <button value={el.tarea} onClick={(e)=> handleDelete(e)}>Eliminar tarea</button>
                        </div>
                    )
                })
            }
        </div>
    )
}