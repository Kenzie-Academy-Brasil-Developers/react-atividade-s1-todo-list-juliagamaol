import './App.css';
import {useState} from 'react'
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
function App() {
  const[todo, setTodo] = useState([])

  const addTodo = (newTodo) =>{
      setTodo([...todo, newTodo])
  }

  const handleTodo = ((itemRemoved)=>{
    
    let remover = todo.filter((item)=>{
      return item !== itemRemoved
    })
    setTodo(remover)
  })
  return (
    <div className="App">
      <header className="App-header">
        <Form 
        addTodo={addTodo}/>
        <TodoList 
        todo={todo}
        handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;
