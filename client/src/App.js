import React from 'react';
import Navbar from './components/navbar/navbar';
import AppRoutes from './components/routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
    </div>
  );
}

export default App;
