import RatioPlaceholder from '../src';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <RatioPlaceholder ratio="16:9" style={{marginBottom: '10px'}}/>
        <RatioPlaceholder color="blue" width="500" height="500" />
      </div>
    )
  }
}

var main = document.createElement('div');
main.id = 'app';
document.body.appendChild(main);

ReactDOM.render(<App/>, main);
