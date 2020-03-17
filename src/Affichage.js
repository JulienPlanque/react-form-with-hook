import React, { useState } from 'react'
import Form from './Form'

export default function Affichage() {
    const [todos, setTodos] = useState([])

    const addTodo = text => {
        const newTodos = [...todos, text]
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = todos.slice()
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <Form addTodo={addTodo} />
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li key={index} onClick={() => removeTodo(index)}>{item}</li>
                    )
                }
                )}
            </ul>
        </div>
    )
}
