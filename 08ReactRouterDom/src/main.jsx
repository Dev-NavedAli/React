import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router =createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route  path='/user/:userid' element={<User/>}/>
    <Route  path='/github' element={<Github/>}/>

  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
