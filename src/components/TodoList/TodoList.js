import './TodoList.css'
const TodoList = ({todo, handleTodo}) =>{
    return(
        <div>
            <ul>
               {todo.map((item,index)=>(
                   <li key={index}>
                       {item}
                    <button onClick={() => handleTodo(item)} id="concluir">Concluir tarefa</button>
                </li>

               ))}
            </ul>
        </div>
    )
}

export default TodoList