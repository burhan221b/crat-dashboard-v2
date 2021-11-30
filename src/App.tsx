import React from 'react';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}

export default App;
