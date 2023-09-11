import './App.css';
import Login from './pages/page-Log-Sign/Login.js'
import SignUp from './pages/page-Log-Sign/SignUp.js'
import Home from './pages/page-Home/Home'
import Developers from './pages/page-Developers/Developers.js';
import Main from './pages/page-Main/mainPage.js';
import Menu from './pages/page-Main/menuHamburguer'
import Historial from './pages/page-Historial/Historial.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// <Navigation/>
//<Routes>
// <Route path="/Login" component={<Login/>}/>
//<Route path="/SignUp" component={<SignUp/>}/>
// </Routes>
//
function App() {
 return (
    <div className='App'>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/desarrolladores" element={<Developers />} />
        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/historial" element={<Historial />}/>
        {/* Otras rutas */}
      </Routes>
    </Router>
    
    </div>
 );
}

export default App;
