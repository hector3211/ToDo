import React,{useState} from "react"
interface Todo{
  id:number
  do:string 
}
const Input:React.FC = () =>{
  const [todo, setToDo] = useState<string>("");
  const [toList, setToDoList] = useState<Todo[]>([])
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setToDoList([...toList,{id:Date.now(),do:todo}])
      localStorage.setItem("todo list",JSON.stringify(toList))
    }
    setToDo("")
  }
  const deleteItem = (id:number) => {
    setToDoList(toList.filter((todo) => todo.id !== id))
  }
  return(
    <div className="min-w-full mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <input onChange={(e) => setToDo(e.target.value)} value={todo} type="text" className="min-w-full input input-primary" />
        <button type="submit" className="btn btn-primary mt-2 min-w-full text-md">Add</button>
      </form>
      <div className="pt-2">
      {toList.map((item,index)=>(
        <div key={index} className="flex pt-5">
          <li className="text-xl">{item.do}</li>
          <button className="btn btn-secondary btn-sm mx-2" onClick={()=> deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Input;
