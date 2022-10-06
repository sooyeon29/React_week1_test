import React, {useState} from "react";
import "./App.css"

export default function App() {
  const [todo, setTodo] = useState("")
  const inputBox = (event) => {
    setTodo(event.target.value)
  }

  const [todos, setTodos] = useState([])
  const enterInput = (event) => {
    event.preventDefault()
    if (todo.trim() === "") return 
      setTodos([...todos, todo])
      setTodo("")    
  }

  return (
    <div>

      <div className="title">
        <h1>MY TODO LIST📜</h1>
      </div>

      <form onSubmit={enterInput} className="input-box">
        <div className="enterword">
        <input
        type="text"
        value={todo}
        placeholder="write your todo list!"
        onChange={inputBox}
      />    
      <button className="save-but"> SAVE </button>
      </div>
      <div className="box">
        {todos.map((x) => {
          return (
            <div className="save-box">
              <span>{x}</span>
            </div>
          )
        })
      }
      
      </div>
      </form>

    </div>
  )
}







// import React, {useState} from "react";
// import "./App.css"

// export default function App () {
  
//   const [todo, setTodo] = useState("")
//   const changeInput = (event) => {
//     setTodo(event.target.value)
//   }

//   // console.log(todo)
  
//   const [todos, setTodos] = useState([])
//   const submitInput = (event) => {
//     event.preventDefault()    
//     if(todo.trim() === "") return
    
//     setTodos([...todos, todo])
//     setTodo("")
//   }
  


//  return (
//     <div className="total">
//       <div className="adding-box">
//         <form onSubmit={submitInput}>
//           <input          
//           type="text"
//           value={todo}          
//           onChange={changeInput}
//           />
//           <button type="submit" className="adding-but">추가하기</button>
//         </form>
          
//       </div>

//       <h1 className="todoname">Todo List</h1>
//       <br></br>

//       {todos.map((x) => {return (
//         <div className="todobox">
//           {x}         
//         </div>
//       )})}
      

//     </div>
//  )
// }
