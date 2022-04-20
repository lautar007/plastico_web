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
        if(input.fecha === '' || input.hora === '' || input.tarea === ''){
            alert('debe rellenar todos los campos')
        }
        else{
        dispatch(postTarea(input));
        (window.location.reload());
        }
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteTarea(e.target.value));
        window.location.reload();
    }

    return(
        <div>
            <div>
                <h1 id='titulo-tareas'>Lista de Tareas</h1>
            </div>
            <div id='cont-form-tareas'>
                <div>
                    <h2>Crear una nueva tarea:</h2>
                </div>
                <div>
                    <form id='form-tareas'>
                        <label id='labels'>Fecha:</label>
                        <input
                          id='inputs'
                          type = 'date'
                          value={input.fecha}
                          name = 'fecha'
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>Hora:</label>
                        <input
                          id='inputs'
                          type = 'text'
                          value={input.hora}
                          name = 'hora'
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>Tarea:</label>
                        <input
                          id='input-tarea'
                          type = 'text'
                          value={input.tarea}
                          name = 'tarea'
                          onChange={(e)=> handleChange(e)}
                        />

                        <button id='B-crear-tarea' onClick={(e) => handleSubmit(e)}>Crear Tarea</button>
                    </form>
                </div>
            </div>    
            {
                list.length > 0 ? list.map((el)=>{
                    return(
                        <div key={el.id} className='cont-tarea'>
                            <div>
                                <h4 id='label2'>Fecha:</h4>
                                <p id='data'>{el.fecha}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Hora:</h4>
                                <p id='data'>{el.hora}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Tarea:</h4>
                                <p id='data-tarea'>{el.tarea}</p>
                            </div>
                            <button id = 'B-delete' value={el.tarea} onClick={(e)=> handleDelete(e)}>Eliminar tarea</button>
                        </div>
                    )
                })
                :
                <div>
                <h1 id='titulo-tareas'>Aún no hay tareas. Create una!!</h1>
                <h2 id='titulo-tareas'>Si acabas de crear y no aparece, refresca la página</h2>
                </div>
            }
        </div>
    )
}