import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Error from './pages/Error'
import Loading from './pages/loading'
import PrivateRoutes from './pages/PrivateRoutes'




function App() {
  

  return (
    <Router>

   <Routes>
    <Route element={<PrivateRoutes/>}>
    <Route element={<Home/>} path='/' exact/>
    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/loading' element={<Loading/>}/>
   </Routes>

    </Router>
   
  
  )
}
// /gallery/images
// '/'

export default App
