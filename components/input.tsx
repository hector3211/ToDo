import React,{useState} from "react"
import useStore from "../ultils/store"
import {TiDeleteOutline} from "react-icons/ti"

const Input:React.FC = () =>{
  const store = useStore()
  return(
    <div className="min-w-full mt-10 flex flex-col">
        <input onChange={(e) => store.setNewTodo(e.target.value)} value={store.newTodo} type="text" className=" input input-primary" />
        <button onClick={() => store.addTodo()} className="btn btn-primary mt-2 text-md">
          Add
        </button>
      <div className="pt-2">
        {store.todos.map((todo) => (
          <div key={todo.id} className="flex justify-start items-center">
            <span className="text-3xl">{todo.text}</span>
            <button className="btn btn-secondary btn-sm text-2xl ml-2" onClick={() => store.deleteTodo(todo.id)}>
              <TiDeleteOutline/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Input;
