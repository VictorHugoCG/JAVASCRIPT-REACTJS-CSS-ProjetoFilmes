import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render()
  {
    return(
      <div className="app">
        <h2>Projeto Filmes</h2>
        <Routes/>
      </div>
    );
  };
};

export default App;
