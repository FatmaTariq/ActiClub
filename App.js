import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row } from 'reactstrap';
import FacePage from "./Components/FacePage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import ForgetPass from './Components/ForgetPass';
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cooking from "./Components/Cooking";

function App() {
  return (
    <Container>
    <Router>

          <Header/>
    
      <Row>
      <Routes>
        <Route path="/" element={<FacePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cooking" element={<Cooking />} />
      </Routes>
      </Row>

     

    </Router>
    </Container>
  
    
  );
}

export default App;