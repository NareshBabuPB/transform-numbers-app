import React from 'react';
import './App.css';
import TransformNumbers from './components/transform-number'

class App extends React.Component {

  renderHeader = () => <div className='app-header'><h1>Tranform Number to Words</h1></div>;

  render() {
    return (
      <div className="app">
        {this.renderHeader()}
        <div className="app-wrapper">
          <TransformNumbers />
        </div>
      </div>
    );
  }
}

export default App;
