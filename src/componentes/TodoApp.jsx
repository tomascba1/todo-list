import React, { useState } from 'react';
import { Todo } from './Todo';
import "./todo.css"

const TodoApp = () => {
    const [title, setTitle] = useState('')
    const [todo, setTodo] =useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

    setTodo([...todo, newTodo])
    setTitle("")
    }
    function handleUpdate(id, newValue){
        const temp = [...todo]
        const item = temp.find(item => item.id === id)
        item.title = newValue
        setTodo(temp)
    }
    function handleDelete(id){
        const temp = todo.filter(item => item.id !== id)
        setTodo(temp)
    }

    return(
        <div className='todoContainer border'>
            <h1>To Do List</h1>
            <form action="" onSubmit={handleSubmit} className="todoCreateForm">
                <input className='todoInput' type="text" autoFocus value={title} onChange={handleChange}/>
                <input className='buttonCreate' type="submit" onClick={handleSubmit} />
            </form>
            <div className='todoItem'>
                {todo.map(item => (
                    <Todo item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>))}
            </div>
        </div>
    )
}

export { TodoApp }