import React from 'react';
import reactDom from 'react-dom';
import $ from 'jquery';
import ComponentOne from './components/componentOne.jsx'

class App extends React.Component{

  render(){
    return(
      <div>
      <ComponentOne />
      </div>

    )

  }
}
reactDom.render(<App />,document.getElementById('app'));
