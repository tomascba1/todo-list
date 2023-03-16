import React, { useState } from 'react';
import './todo.css'

const Todo = ({item, onUpdate, onDelete, onComplete, complete, setComplete}) => {
    const [isEdit, setIsEdit] =useState(false)

    
    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(e){
            e.preventDefault();

        }
        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value)
        }
        function handleClick(){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }
        return (<form onSubmit={handleSubmit} className="todoUpdateForm">
            <input autoFocus className='todoInput' type="text" onChange={handleChange} value={newValue}/>
            <button className='button' onClick={handleClick}>update</button>
        </form>)
    }
    
    
    function TodoElement(){
        function handleCheckClick(){
            setComplete(!complete)
            onComplete(item.id)
        }
        return (<div className='todoInfo'><span>{item.completed ? <i style={{color: 'green'}} class="bi bi-check"></i> : <i style={{color: 'red'}} class="bi bi-x"></i>}</span><span onClick={handleCheckClick} className='todoTitle'>{item.title}</span><button className='button' onClick={() => setIsEdit(true)}>Edit</button><button className='buttonDelete' onClick={(e) => onDelete(item.id)}>Delete</button></div>)
    }
    return(
        <div className='todo'>
            {isEdit? <FormEdit /> : <TodoElement />}
            
        </div>
    )
}

export { Todo }