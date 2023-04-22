import { Component } from 'react';

import EmojisList from './components/EmojisList/EmojisList';

import './App.css';

class App extends Component{
  
  render(){
    
    return (

      <div className="App">

          <EmojisList/>
          
      </div>
    );
  }
}

export default App;