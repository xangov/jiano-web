import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninPage from './pages/signin';
import Blockexplorer from './pages/blockexplorer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />} exact />
        <Route path='/signin'element= {<SigninPage />} exact />
        <Route path='/blockexplorer'element= {<Blockexplorer />} exact />
      </Routes>
    </Router>
  );
}

export default App;
