import React, { useState } from "react"; 
import Form from "./components/form/Form";
import Sidebar from "./components/sidebar/Sidebar";
import Modal from './components/modal/Modal'
import "./styles/main.scss";
import Button from "./components/button/Button";

function App() {
 
  return (
    <div className="App">     
      <Sidebar/>
      <Form/>

    </div>
  )
}

export default App
