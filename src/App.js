// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert' ;
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) => {
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      }, 1000);
  }
  const toggleMode = () =>{
    if(mode === "light")
    {
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - Light Mode"
      
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title = "Textutils"  mode = {mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element = {<About/>} /> */}
          <TextForm showAlert = {showAlert} heading = "Enter the text to analyse below" mode = {mode}/>
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
