import React from 'react';
import './App2.css'
import Header from './components/layout/Header/Header'
import Sidebar from './components/layout/Menu/Menu'
import Grid from './components/layout/form/Grid'

function App() {
  return (
    <div className="app">
      {/* <FormGrid /> */}
      <Header />
      <Sidebar />
      <Grid />
    </div>
  );
}

export default App;
