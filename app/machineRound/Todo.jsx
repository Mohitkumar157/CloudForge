"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from 'lucide-react';
import { Circle } from 'lucide-react';
function Todo() {
    const [todos, setTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);
     const [checked , setChecked] = useState(false);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("allTodos"));
        console.log(storedTodos);
        
        if (storedTodos) {
            setAllTodos(storedTodos);
        }
        

    }, [])




    useEffect(() => {
        localStorage.setItem("allTodos", JSON.stringify(allTodos));
        console.log("All Todos", allTodos);
    }, [allTodos])

    function addTodo(e) {
        e.preventDefault();
        if (todos.trim() === "") return;
        setAllTodos((pre) => {
            return [
                ...pre,
                {
                    id : todos,
                    title: todos,
                    completed : false,
                }
            ]
        })
        setTodos("");
    }

    return (
        <div className="flex justify-center items-start h-screen p-16">
            <form onSubmit={addTodo}>
                <input
                    onChange={(e) => setTodos(e.target.value)}
                    type="text"
                    placeholder="create a Todo"
                    name="title"
                    value={todos}
                    className="py-1 px-2 rounded-sm border-[#ccc] border outline-0"
                />
                <button
                    className="ml-3 px-6 py-1 bg-blue-400 text-[#f1f1f1] rounded-sm active:-translate-y-1 transition-all duration-400">
                    Add
                </button>
            </form>

            <AllTodo allTodos={allTodos} setAllTodos={setAllTodos} checked = {checked} setChecked={setChecked}/>
        </div>
    )
}


function AllTodo({ allTodos , setAllTodos}) {
   
    function markComplete(item){
       setAllTodos((pre) =>{
         return pre.map((todo) => {
           return todo.id === item.id 
            ? 
            {
                ...todo , 
                completed : !todo.completed,
                updatedAt : Date.now()
            }
            : todo
         })
       })
       console.log(allTodos);
       
    }

    return (
        <div className="w-[50%] mx-auto flex flex-col gap-4">
            <h1>Your Todo {allTodos?.length}</h1>
            {allTodos?.map((item) => {
              
                return <div key={item.id} className="flex items-center gap-4 p-3 border border-[#ccc] rounded-sm ">
                     <div>
                        {item.completed ? 
                     <CircleCheck className="text-[#409905]" onClick={() => markComplete(item)}/> 
                     : 
                     <Circle className="text-[#409905]" onClick={() => markComplete(item)}/>}
                    <p className={`${item.completed ? "line-through" : ""}`}>{item.title}</p>

                    <div><span>{}</span></div>
                     </div>
                </div>
            })}

        </div>
    )
}

export default Todo
