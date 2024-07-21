import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./styles/index.css"

// pages
import Home from "./pages/Home";

/**
 * App component
 * @component
 * @return {object} - The UI of the App component
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };  
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
          <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
