import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { SidebarProvider, useSidebar } from './context/SidebarContext';

const Layout = () => {
  const { isOpen } = useSidebar();

  return (
    <div className={`app-container ${isOpen ? 'sidebar-open' : ''}`}>
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
};

const App = () => (
  <SidebarProvider>
    <Layout />
  </SidebarProvider>
);

export default App;
