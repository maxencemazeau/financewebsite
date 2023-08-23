import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/Home/Home"
import LoginForm from './page/Login/LoginForm';
import Register from './page/Register/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<LoginForm />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
