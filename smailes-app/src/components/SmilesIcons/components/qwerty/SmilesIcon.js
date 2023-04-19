import { Component } from "react";

class Qwerty extends Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0
      }
    }
  
    nextNumber = () => {
      this.setState(state => ({
        count: state.count  -1
      }));
    }
    prevNumber = () => {
        this.setState(state => ({
          count: state.count + 1
        }));
      }
    render(){
      const {className} = this.props;
      const {count} = this.state
  
      return (
       <div >
            <i className={className}>{count}</i>
            <button className="bi bi-hand-thumbs-up-fill" onClick={this.prevNumber}></button>
            <button className="bi bi-hand-thumbs-down-fill" onClick={this.nextNumber}></button>

       </div>
         
     
      )
    }
  }
  
  export default Qwerty