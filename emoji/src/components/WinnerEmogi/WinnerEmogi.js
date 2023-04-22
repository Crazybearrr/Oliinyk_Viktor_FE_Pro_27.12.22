import { Component } from "react";

import OnBtn from "../OnBtn/OnBtn";

import './WinnerEmogi.css'


class WinnerEmogi extends Component{
    state={
        winningEmoji: null,
    };

    hadlShowResultClick = () =>{
        const winningEmoji = this.props.smileys.reduce((prev, cur) =>
        prev.count>cur.count?prev:cur
        );
        this.setState({winningEmoji});
    };

    hadlEmojiResetClick = () =>{
        const {smileys} = this.props;
        const resetSmileys = smileys.map((emoji)=>({
            ...emoji, count:0
        }));
        this.props.onReset(resetSmileys);
    };

    render(){
        const {winningEmoji} = this.state;
        return(
            
            <div className="wrap_winner">
                <div className="wrap__winner_btn">
                <OnBtn
                    onClick = {this.hadlShowResultClick}
                    title="Show Result" />
                </div>
                
                {winningEmoji&&(
                    <div>
                        <h2>Winner</h2>

                        <span>{winningEmoji.title}</span>

                        <div className="winner__items">
                            <li className="winner__count">{winningEmoji.count}</li>
                            <li className="winner__item">{winningEmoji.emoji}</li>
                        </div>

                        <div className="wrap__winner_btn">
                            <OnBtn
                                onClick={this.hadlEmojiResetClick}
                                title = "Reset" />
                        </div>
                        
                    </div>
                )}                  
            </div>
        )
    }
}

export default WinnerEmogi