import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  let [length,setLength] = useState(8)
  let [numberAllowed , setNumberAllowed] =  useState(false)
  let [charAllowed , setCharAllowed] = useState(false)
  let [password,setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenrator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz" 
    if(numberAllowed){
      str+= "0123456789"
    }
    if(charAllowed){
      str+="`~!#$%^&*()_-=+\][;':<>?/"
    }    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

useEffect(()=>{
  passwordGenrator()
},[length,numberAllowed,charAllowed])

   const copyPasswordToClipboard =useCallback (()=>{
    passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    
   },[password])

  return (
    <>
    <div className='w-full max-w-md shadow-md rounded-lg py-3 px-4 text-orange-600 bg-gray-600'>
      <h1 className='text-white text-center text-2xl'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 p-8   '>
        <input 
        type="text"
        value={password} 
        className='outline-none w-full py-1 px-1 rounded-md'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
      <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 ml-4'
      onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength((e.target.value))}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>

        </div>
      </div>
    </div>

    </>
  )
}

export default App
