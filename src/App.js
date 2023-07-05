import React from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Header from './SortingVisualizer/Header';
import Footer from './SortingVisualizer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
     <SortingVisualizer /> 
     <Footer />  

    </div>
  );
}

export default App;
