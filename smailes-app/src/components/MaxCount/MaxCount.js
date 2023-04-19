import { Component } from "react";

import './MaxCount.css'



class MaxCount extends Component{
        constructor(props){
                super(props);
                this.state ={
                        maxCount: 0
                }
        }
        render(){
                
                return(
                        <div className="elem"></div>
                )
        }
}


export default MaxCount

        