import { Component } from "react";


class OnBtn extends Component{

    render(){
        const {title, className, onClick} = this.props
        return(
            <button className={className} onClick={onClick}>{title}</button>
        )
    }
}

export default OnBtn