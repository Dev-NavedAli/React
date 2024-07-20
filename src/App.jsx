import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
       <h1 className='bg-green-500 p-4 text-white  rounded-lg'>Color</h1>
       <Card  username="naved khan" btnText="Click Me"/>
       <Card  username="noman khan"  />
    </>
  )
}

export default App
