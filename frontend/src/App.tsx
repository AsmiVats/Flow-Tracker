import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Profile from './pages/Profile'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App