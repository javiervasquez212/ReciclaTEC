import './App.css';
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'
import Home from './pages/Home'
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
