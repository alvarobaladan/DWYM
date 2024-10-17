import Home from './Home.jsx'
import Add from './Add.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Add />} path='/Add' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
