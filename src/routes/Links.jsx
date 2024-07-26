import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'


const Links = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Links
