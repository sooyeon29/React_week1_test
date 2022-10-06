import React, {useState} from "react";
import "./App.css"

export default function App () {
  
  const [todo, setTodo] = useState("")
  const changeInput = (event) => {
    setTodo(event.target.value)
  }

  console.log(todo)
  
  const submitInput = (event) => {
    event.preventDefault()    
    if(todo.trim() === "") return
    setTodo(todo)
  }
  

 return (
    <div className="total">
      <div className="adding-box">
        <form onSubmit={submitInput}>
          <input          
          type="text"
          value={todo}          
          onChange={changeInput}
          />
          <button type="submit" className="adding-but">추가하기</button>
        </form>
          
      </div>

      <h1 className="todoname">Todo List</h1>
      <br></br>

      {/* {todo.map((todos) => {return (
        <div className="todobox">
          {todos}         
        </div>
      )})} */}

        <div className="todobox">
          {todo}         
        </div>
      

    </div>
 )
}
