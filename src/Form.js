import React, { useState } from 'react'

export default function Form({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setValue(e.target.value)} />
            <button>Envoyer</button>
        </form>
    )
}
