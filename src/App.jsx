import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counts from './Count'
import User from './User'
import Friend from './Friend'

function App() {
  function HandelButton(){
    alert('My first button')
  }

  const HandelButton2 = ()=>{
    alert('Button 2')
  }
  const addToFive = (num) =>{
      alert(num+5);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Friend></Friend>
      <User></User>

      <Counts></Counts>

      <button onClick={HandelButton}>My Button</button>
      <button onClick={HandelButton2}>Button 2</button>
      <button onClick={()=>{alert('My third button is here')}}>button 3</button>
      <button onClick={()=>{addToFive(5)}}>button </button>
    </>
  )
}

export default App
