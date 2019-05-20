import React from 'react';


function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        transition: "1s all"
    }
    return(
        <div className="TodoItem">
            <input 
                type="checkbox" 
                checked = {props.item.completed} 
                onChange = {() => props.handelChange(props.item.id)}/>
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;