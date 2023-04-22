import { Component } from "react";

import OnBtn from "../../../OnBtn/OnBtn";

import './EmojiItem.css'

class EmojiItem extends Component{
    render(){
        const {emoji, count, title, like, dislike, onClickLike, onClickDislike} = this.props;
        return(
            <div className="emoji">
                <span>{title}</span>
                <div>
                    <li className="emoji__item">{emoji}</li>
                    <li className="emoji__count">{count}</li>
                </div>
                <div>
                    <OnBtn
                        className = "btn__emoji"
                        onClick = {onClickLike}
                        title = {like} />

                    <OnBtn
                        className = "btn__emoji"
                        onClick = {onClickDislike}
                        title = {dislike} />
                </div>
                <hr />
            </div>
        )
    }
}

export default EmojiItem