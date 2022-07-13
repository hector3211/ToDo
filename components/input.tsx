import React,{useState} from "react"
interface Todo{
  id:number
  do:string 
}
const Input:React.FC = () =>{
  const [todo, setToDo] = useState<string>("");
  const [toList, setToDoList] = useState<Todo[]>([])
  const handleClick = (e:React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setToDoList([...toList,{id:Date.now(),do:todo}])
    }
    setToDo("")
    console.log("toList")
  }
  const deleteItem = (id:number) => {
    setToDoList(toList.filter((todo) => todo.id !== id))
  }
  return(
    <div className=" w-96 flex flex-col justify-center item-center">
      <form onSubmit={handleClick}>
        <input onChange={(e) => setToDo(e.target.value)} value={todo} type="text" className="w-full h-8  rounded border border-black bg-gray-300" />
        <button type="submit" className="w-1/2 h-8 mx-auto rounded text-black bg-blue-500">Add</button>
      </form>
      <div className="pt-2">
      {toList.map((item,index)=>(
        <div key={index}>
          <li>{item.do}</li>
          <button className="bg-red-500 rounded px-2 mx-2" onClick={()=> deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Input;
