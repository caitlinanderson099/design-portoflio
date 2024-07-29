import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'

import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Projects from './components/pages/Projects'


const App = () => {

  return (
    <>
      <HashRouter>
        <Header/>
        <Links/>
        <Footer/>
      </HashRouter>
      
    </>
  )
}

export default App
