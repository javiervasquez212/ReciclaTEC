import './App.css';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Login from './components/Login.js'
//import SignUp from './components/SignUp.js'
//import Navigation from './components/Navigation.js'
import Home from './pages/Home'


// <Navigation/>
//<Routes>
// <Route path="/Login" component={<Login/>}/>
//<Route path="/SignUp" component={<SignUp/>}/>
// </Routes>
//
function App() {
 return (
    <div className='App'>
        <Home/>
    </div>
 );
}

export default App;
