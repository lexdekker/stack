import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import React from 'react'

const App = () => {
  return (
    <main>
      <Header />
      <Outlet /> {/* Renders child routes (Home, About, etc.) */}
    </main>
  );
};

export default App;
