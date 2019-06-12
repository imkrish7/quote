import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import QuoteBox from './quotes.js';
import './App.css';
library.add(faTwitter,faTumblr);
class App extends Component {
constructor(props){
  super(props);
  this.change=this.change.bind(this);
}
change(color){
  this.refs.background.style.background=color;
}
  render() {
    return (
      <div className="App" ref="background">
        <QuoteBox  change={this.change}/>
        {/* <footer>By Krishna Kamal</footer> */}
      </div>
    );
  }
}

export default App;
