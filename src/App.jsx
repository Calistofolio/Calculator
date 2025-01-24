import Button from "./components/button/button"

function App() {

  const row1 = ["AC", "+/-" ,"%", "/"]
  const row2 = [7, 8 , 9, "X"]
  const row3 = [4, 5 , 6, "-"]
  const row4 = [1, 2 , 3, "+"]
  const row5 = [0, ",", "="]


  return (
    <div>
      {row1.map((n) => <Button title = {n}/>)}
      <div>
        {row2.map((n) => <Button title = {n}/>)}
      </div>
      <div>
        {row3.map((n) => <Button title = {n}/>)}
      </div>
      <div>
        {row4.map((n) => <Button title = {n}/>)}
      </div>
      <div>
        {row5.map((n) => <Button title = {n}/>)}
      </div>
    </div>
  )
}

export default App
