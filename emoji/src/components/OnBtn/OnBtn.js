import { Component } from "react";


class OnBtn extends Component{

    render(){
        const {onClick, title, className} = this.props;
        return(
            <button className={className} onClick={onClick}>{title}</button>
        )
    }
}

export default OnBtn