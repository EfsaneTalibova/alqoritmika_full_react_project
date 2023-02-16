import './App.css';
import {useState} from 'react'

function App() {
const [ name, setName] = useState("");
const [ todos, setTodos] = useState([]);
const addTodo = () =>{
  setTodos([...todos,name]);
  console.log(todos);
  setName('');
}
  return (
    <>
   <div>
    <input 
    value={name}
    onChange={(e) => setName(e.target.value)}
     type='text'
    placeholder='add todo'
    />
    <button onClick={addTodo}>Add todos</button>
    {todos.map((todo, b) => <li key={b}>{todo}</li>)}
   </div>
    </>
  );
}

export default App;
