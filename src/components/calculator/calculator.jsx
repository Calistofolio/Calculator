import { useState } from "react"
import Button from "../button/button.jsx"
import "./calculator.css"

function Calculator() {

  const [input, setInput] = useState(" ") 
  const [perInput, setPerInput] = useState(" ")

  const row2 = ["7", "8" , "9"]
  const row3 = ["4", "5" , "6"]
  const row4 = ["1", "2" , "3"]
  const row5 = ["0", ","]

  function addValue(value) {
    if (input == undefined || input == " ") {
      setInput(value)
    } else {
      setInput((prev) => prev + value)
    }

    if(input == undefined || input == " " && value == "/" 
        || input == undefined || input == " " && value == "+" 
        || input == undefined || input == " " && value == "*"){
        setInput(" ")
    }
  }

  function equals() {
    const result = eval(input)
    setInput(result)
  }

  function clean(){
    setInput(" ")
  }


  return (
    <div className = "wrapper">
        <div>
        <input type="text" value={input + perInput}/>
        </div>
        <div>
        <Button title = "AC" onclick = {() => clean()}/>
        <Button title = "+/-" onclick = {() => addValue("/")}/>
        <Button title = "%" onclick = {() => addValue("%")}/>
        <Button title = "/" onclick = {() => addValue("/")}/>
        </div>
        <div>
            {row2.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
            <Button title = "X" onclick = {() => addValue("*")}/>
        </div>
        <div>
            {row3.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
            <Button title = "-" onclick = {() => addValue("-")}/>
        </div>
        <div>
            {row4.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
            <Button title = "+" onclick = {() => addValue("+")}/>
        </div>
        <div>
            {row5.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
            <Button title = "=" onclick = {() => equals()}/>
        </div>  
    </div>
  )
}

export default Calculator
