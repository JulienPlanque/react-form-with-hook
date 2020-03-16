import React, { useState } from 'react'
import Form from './Form'

export default function Affichage() {
    const [todos, setTodos] = useState([1, 2, 3])

    const addTodo = text => {
        const newTodos = [...todos, text]
        setTodos(newTodos)
    }

    return (
        <div>
            <Form addTodo={addTodo} />
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                }
                )}
            </ul>
        </div>
    )
}
