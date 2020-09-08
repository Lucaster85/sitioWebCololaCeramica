import React from 'react';
import Navigation from './components/navigation/Navigation';
import SideBar from './components/sideBar/SideBar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
