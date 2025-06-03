import React from "react";
import "./index.css"
// import { Button } from './components/ui/ui/button'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ghost } from "lucide-react";
import SignUpForm from "./auth/forms/SignUpForm";
import LogInForm from "./auth/forms/LogInForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Hader from "./components/Hader";
import Sign from "./auth/forms/Sign";

const App = () => {
  return (
    <BrowserRouter>
      <Hader />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignUpForm />} />
        <Route path="/Log-in" element={<LogInForm />} />
        <Route path="/sign" element={<Sign/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
