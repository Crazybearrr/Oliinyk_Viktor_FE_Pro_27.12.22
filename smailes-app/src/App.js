import { Component } from 'react';

import SmilesIcon from './components/SmilesIcons/SmilesIcons';
import MaxCount from './components/MaxCount/MaxCount';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {className:'bi bi-emoji-wink-fill smile', id:1},
        {className:'bi bi-emoji-angry-fill smile', id:2},
        {className:'bi bi-emoji-dizzy-fill smile', id:3},
        {className:'bi bi-emoji-heart-eyes-fill smile',  id:4},
        {className:'bi bi-emoji-smile-upside-down-fill smile', id:5},
        {className:'bi bi-emoji-sunglasses-fill smile', id:6},
        {className:'bi bi-emoji-neutral-fill smile', id:7}
      ]
    }
  }  
  
  render(){
    
    const {data}=this.state;
    
    return (

      <div className="App">
        <SmilesIcon
        data={data}/>

        <MaxCount/>
      </div>
    );
  }
}

export default App;