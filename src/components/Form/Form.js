import {useState} from 'react'
import "./Form.css";
const Form = ({addTodo}) =>{
    const[valorInput, setValorInput] = useState('')
    return(
        <form>
            <input
            type="text"
            value={valorInput}
            placeholder="Nova tarefa"
            onChange={(event) =>  setValorInput(event.target.value)}
            />
            <button onClick={(event)=>{
                event.preventDefault()
                addTodo(valorInput)
                setValorInput('')
            }} id="enviar">Enviar</button>
        </form>
    )
}

export default Form