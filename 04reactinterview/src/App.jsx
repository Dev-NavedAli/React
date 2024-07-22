import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount(count+1)
    setCount((prevCount)=>prevCount+1) // matlab setCount parameter bhi accept krta hai jisme count
  }                                    //  ki last updated value jaayegi yhi ham setCount ko baar 
  return (     // baar likhe tovo update 2 times me nhi hoga lekin prevCount se ho jaayega
    <>
      <h1>React Counter App</h1>
      <p>Here the value is changed  {count}</p>
      <button onClick={addValue}>Click {count}</button>
    </>
  )
}

export default App
