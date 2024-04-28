import React from "react"; 
import { useState } from "react";

export const TodoList = () => {
    const [list, setList] = useState([]);
    const [currentInput, setCurrentInput] = useState("");
    
    const getCurrentInput = (event) => {
        setCurrentInput(event.target.value);
    }

    const addTask = () => {
        const newInputs = {
            task: currentInput,
            uniqueID : list.length === 0 ? list.length+1 : list[list.length-1].uniqueID + 1,
            completed : false
        }
        setList([...list, newInputs]);
        setCurrentInput(""); 
    };

    const completeTask = (id) => {
        const updatedTask = list.find(task => task.uniqueID === id);
        updatedTask.completed = true;


        const updatedList = list.filter(task => task.uniqueID !== id);
        setList([...updatedList, updatedTask]);
    }

    const removeTask = (id) => {
        setList(list.filter((task) => task.uniqueID !== id))
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px"}}>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <input value={currentInput} onChange={getCurrentInput}/> <button onClick={addTask}>Add Task</button>
            </div>

            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <div style={{display: "flex", justifyContent: "center", gap: "15px", flexDirection: "column"}}>
                    {list.map((task) => {
                        return (
                            <div id={task.uniqueID} style={{display: "flex", gap: "5px"}} className={task.completed && 'bg-emerald-400'}>
                                <span id={task.uniqueID}>{task.task}</span>
                                <button id={task.uniqueID} onClick={() => completeTask(task.uniqueID)}> done </button>
                                <button id={task.uniqueID} onClick={() => removeTask(task.uniqueID)}> remove </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
