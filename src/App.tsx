import {Navbar} from './components/Navbar.tsx'
import {Feed} from './components/Feed.tsx'
import {Footer} from './components/Footer.tsx'
import {Weather} from './pages/Weather.tsx'
import {Bitcoin} from './pages/Bitcoin.tsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/bitcoin" element={<Bitcoin/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
