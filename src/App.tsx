import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import Layout from './pages/layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/menu/menu';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='*' element={<h1>Page not found D:</h1>}/>
          <Route index element={<Home/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='specials' element={<h1 style={{margin:'64px auto', color:'#ffffff'}}>Special section :D</h1>}/>
          <Route path='other' element={<h1 style={{margin:'64px auto', color:'#ffffff'}}>Other section :D</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
