import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Enter from './Pages/Enter';
import Registration from './Pages/Registration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/enter' element={<Enter />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
