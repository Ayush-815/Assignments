import React from 'react';
import Header from './Header';
import MBody from './MBody';
import Footer from './Footer';

function App() {
  const reactStyle = {
    alignItems: 'center',
    margin: "20px"
  };
  return (
    <div style={reactStyle}>
      <Header />
      <MBody />
      <Footer />
    </div>
  );
}

export default App;
