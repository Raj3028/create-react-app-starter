import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { IsAuthenticated } from './utils/IsAuthenticated';
import TokenCheck from './utils/TokenCheck';
import "react-toastify/dist/ReactToastify.css";
import './App.scss';

import Home from './postlogin/Home';
import Login from './prelogin/Login';
import SignUp from './prelogin/SignUp';
import FallbackPage from './fallback/FallbackPage';


function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
        <Route element={<IsAuthenticated><Home /></IsAuthenticated>} path='/home' />
        <Route element={<TokenCheck><Login /></TokenCheck>} path='/' />
        <Route element={<TokenCheck><SignUp /></TokenCheck>} path='/signup' />
        <Route element={<IsAuthenticated><FallbackPage /></IsAuthenticated>} path='/*' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
