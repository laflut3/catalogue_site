import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./styles/index.css"
import "./styles/components.css"

// pages
import Home from "./pages/Home";
import Error_Page from "./pages/Error_page";
import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import Product from './pages/ProductPage';

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
            <Route path='*' element={<Error_Page />} />
            {/* Auth */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            {/* Product */}
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
