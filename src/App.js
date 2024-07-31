// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = ()=> {
    if (mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.getElementsByClassName("form-control")[0].style.backgroundColor = "#fff"
    }else{
      setMode("dark")
      document.body.style.backgroundColor = "#252525"
      document.getElementsByClassName("form-control")[0].style.backgroundColor = "#373737"
    }
  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading= "Enter your text to analyze below:" mode={mode}/>
    </>
  );
}

export default App;
