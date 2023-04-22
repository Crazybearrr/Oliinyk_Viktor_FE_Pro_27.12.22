import EmojiIem from './components/EmojiItem/EmojiItem';

import smileys from '../data/mockingEmojes';
// import OnBtn from '../OnBtn/OnBtn';
import WinnerEmogi from '../WinnerEmogi/WinnerEmogi';

const { Component } = require("react");



class EmojisList extends Component{
    state= {
        smileys : smileys,
    };

    hadlEmojiLikeClick = (id) => {
        const updatedSmileys = this.state.smileys.map((emoji)=>{
            if(emoji.id === id){
                return {...emoji, count: emoji.count +1};
            } else {
                return emoji;
            }
        });
        this.setState({smileys: updatedSmileys});
    };

    hadlEmojiDislikeClick = (id) => {
        const updatedSmileys = this.state.smileys.map((emoji)=>{
            if(emoji.id === id){
                return {...emoji, count: emoji.count -1};
            } else {
                return emoji;
            }
        });
        this.setState({smileys: updatedSmileys});
    };

    hadlResetSmileys =(resetSmileys)=>{
        this.setState({smileys: resetSmileys});
    };


    render(){

        const {smileys} = this.state;
        return(
            <div>
               
            {smileys.map((emoji)=>(
                        <EmojiIem
                        key = {emoji.id}
                        emoji = {emoji.emoji}
                        count = {emoji.count}
                        title = {emoji.title}
                        like = {emoji.like}
                        dislike = {emoji.dislike}
                        onClickLike = {()=> this.hadlEmojiLikeClick(emoji.id)}
                        onClickDislike = {()=> this.hadlEmojiDislikeClick(emoji.id)} />
                    ))}
               
                <WinnerEmogi 
                    smileys={smileys} 
                    onReset ={this.hadlResetSmileys}n/>             
            </div>
        )
    }
} 

export default EmojisList