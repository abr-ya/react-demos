import React from 'react';
import Hello from '../Hello/Hello';
import './app.scss';

const App = () => (
  <div className="App">
    <h1>React App</h1>
    <Hello name="Трус" />
    <Hello name="Балбес" />
    <Hello name="Бывалый" />
  </div>
);

export default App;
