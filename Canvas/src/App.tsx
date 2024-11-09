import { useState } from 'react';
import './App.css';
import ImageCanvas from './ImageCanvas';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <h1>Image Canvas</h1>
      </header>
      <main>
        <ImageCanvas />
      </main>
    </div>
  );
}

export default App;
