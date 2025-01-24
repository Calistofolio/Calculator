import { useState } from "react"
import Button from "../button/button.jsx"
import Screen from "../screen/screen.jsx"
import "./calculator.css"

function Calculator() {

  const [input, setInput] = useState(" ") 
  const [perInput, setPerInput] = useState(" ")

  const row2 = ["7", "8" , "9"]
  const row3 = ["4", "5" , "6"]
  const row4 = ["1", "2" , "3"]

  function addValue(value) {
    if (input == undefined || input == " ") {
      setInput(value)
    } else {
      setInput((prev) => prev + value)
    }

    if(value == "%"){
        setPerInput(input)
        setInput("%")
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
    setPerInput(" ")
  }

  function clean(){
    setInput(" ")
    setPerInput(" ")
  }


  return (
    <div className = "wrapper">
        <Screen input = {perInput + input}/>
        <div>
        <Button class = "gray" title = "AC" onclick = {() => clean()}/>
        <Button class = "gray" title = "+/-" onclick = {() => addValue("/")}/>
        <Button class = "gray" title = "%" onclick = {() => addValue("%")}/>
        <Button class = "orange" title = "/" onclick = {() => addValue("/")}/>
        </div>
        <div>
            {row2.map((n) => <Button class = "dark-gray" title = {n} onclick = {() => addValue(n)}/>)}
            <Button class = "orange" title = "X" onclick = {() => addValue("*")}/>
        </div>
        <div>
            {row3.map((n) => <Button class = "dark-gray" title = {n} onclick = {() => addValue(n)}/>)}
            <Button class = "orange" title = "-" onclick = {() => addValue("-")}/>
        </div>
        <div>
            {row4.map((n) => <Button class = "dark-gray" title = {n} onclick = {() => addValue(n)}/>)}
            <Button class = "orange" title = "+" onclick = {() => addValue("+")}/>
        </div>
        <div>
            <Button class = "dark-gray zero" title = "0" onclick = {() => addValue("0")}/>
            <Button class = "dark-gray" title = "," onclick = {() => addValue(".")}/>
            <Button class = "orange" title = "=" onclick = {() => equals()}/>
        </div>  
    </div>
  )
}

export default Calculator
