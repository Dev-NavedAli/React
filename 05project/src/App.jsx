import { set } from "mongoose"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
          <div className="flex flex-wrap justify-center gap-3 bg-red-600 px-3 py-2 rounded-xl cursor-pointer" 
          onClick={()=> setColor("red")}>Red</div>
          <div className="flex flex-wrap justify-center gap-3 bg-blue-400 px-3 py-2 rounded-xl cursor-pointer" 
          onClick={()=>setColor("blue")}>Blue</div>
          <div className="flex flex-wrap justify-center gap-3 bg-yellow-500 px-3 py-2 rounded-xl cursor-pointer" 
          onClick={()=>setColor("yellow")}>Yellow</div>
          <div className="flex flex-wrap justify-center gap-3 bg-green-600 px-3 py-2 rounded-xl cursor-pointer" 
          onClick={()=>setColor("green")}>Green</div>
          <div className="flex flex-wrap justify-center gap-3 bg-orange-600 px-3 py-2 rounded-xl cursor-pointer" 
          onClick={()=>setColor("orange")}>Orange</div>

          

        </div>
        
      </div>
    
  )
}

export default App
