import React, { useState } from 'react';

const Todo = ({item, onUpdate, onDelete}) => {
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
        return (<div className='todoInfo'><span className='todoTitle'>{item.title}</span><button className='button' onClick={() => setIsEdit(true)}>Edit</button><button className='buttonDelete' onClick={(e) => onDelete(item.id)}>Delete</button></div>)
    }
    return(
        <div className='todo'>
            {isEdit? <FormEdit /> : <TodoElement />}
            
        </div>
    )
}

export { Todo }