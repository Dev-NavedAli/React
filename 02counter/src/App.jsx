import { useState } from 'react'


function App() {
  let [count, setCount] = useState(15)

  const addValue = ()=>{  
    if(count+1 > 20){
      console.log("Cannot exceed more than 20")
    }else{
      setCount(count+1)
    }
  }

  const removeValue = ()=>{
    if(count-1 < 0){
      alert("Cannot degrade the value than 0")
    }
    else{
      setCount(count-1)
    }
  }


  return (
    <>
    <h1>Chai Or React</h1>
    <h2>Counter Value :{count} </h2>
        <button onClick={addValue}>Add Value</button><br /><br />
        <button onClick={removeValue}>Remove Value</button>   
    </>
  )
}

export default App
