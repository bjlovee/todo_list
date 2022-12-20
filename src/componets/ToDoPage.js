import { useState, useEffect } from 'react';



export default function ToDoPage(props){
const [input, setInput] = useState("");

const handleChange = (evt) => {
  setInput(evt.target.value)
}

  const toDoListData = [
    {
      title: {},
      completed: true
    },
    {
      title: {},
      completed: false
    },
    {
      title: {},
      completed: false
    }
  ];

  const addTodoList= (input) =>{
    toDoListData.push({title: input, complete: false});
    console.log(toDoListData);
  }




    return(
        <form className='form' onSubmit={(e) => {
            e.preventDefault()
                addTodoList(input);
          }}>

        <h1>My To Do List</h1>
        <h3>New Item</h3>
        <input placeholder='Enter A Todo'
          value={input}
          onChange={handleChange}
        />
        <h2>To Do items:</h2>
                <li>

                </li>
        <h3>Completed:{props.completed}</h3>
      </form>
    )
}