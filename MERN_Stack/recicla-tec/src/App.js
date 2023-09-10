import './App.css';
import Login from './pages/page-Log-Sign/Login.js'
import SignUp from './pages/page-Log-Sign/SignUp.js'
import Home from './pages/page-Home/Home'
import developers from './pages/page-Developers/Developers';
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
        {/* Otras rutas */}
      </Routes>
    </Router>
    
    </div>
 );
}

export default App;
