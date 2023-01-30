import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import MainNavbar from './components/navbar/MainNavbar'
import Index from './pages/index'
import Login from './pages/login/Login'

function App() {
  console.log('testing')
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/service-list' element={<Index /> } />
        </Routes>
    </BrowserRouter>

     
  )
}

export default App
