import { useState } from "react"
import Button from "../button/button.jsx"

function Calculator() {

  const [input, setInput] = useState() 

  const row1 = ["+/-" ,"%", "/"]
  const row2 = ["7", "8" , "9", "*"]
  const row3 = ["4", "5" , "6", "-"]
  const row4 = ["1", "2" , "3", "+"]
  const row5 = ["0", ","]

  function addValue(value) {
    if (input == undefined || input == " ") {
      setInput(value)
    } else{
      setInput((prev) => prev + value)
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
    <div>
    <div>
      <input type="text" value={input}/>
    </div>
    <div>
      <Button title = "AC" onclick = {() => clean()}/>
      {row1.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
      <div>
        {row2.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
      </div>
      <div>
        {row3.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
      </div>
      <div>
        {row4.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
      </div>
      <div>
        {row5.map((n) => <Button title = {n} onclick = {() => addValue(n)}/>)}
        <Button title = "=" onclick = {() => equals()}/>
      </div>
    </div>
    </div>
  )
}

export default Calculator
