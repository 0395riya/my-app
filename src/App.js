import React from 'react';
import Header from './Components/Common/Header';
import './App.css';
import Sidebar from './Components/Common/sidebar';
import Dashboard from './Components/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Header />} />
        {/* <Route path='/' element={<Sidebar />} /> */}
      </Routes>
      <Sidebar />
      <Dashboard />
    </React.Fragment>

  );
}

export default App;
