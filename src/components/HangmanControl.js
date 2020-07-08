
import React, { Component} from 'react'
import {connect} from "react-redux"
import { Rate } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import randomWords from 'random-words'
import {setWord, reset, right, toggle, setWin, loseLife, addLetter} from '../actions'

class HangmanControl extends Component {
// function to return array of indexes of the word to guess state that match guessed letter

getIndexes=(arr,letter)=>{
  let indexes =[]
  arr.forEach((e,i)=>{
    if(e.letter === letter){
      indexes.push(i);
    }
  })
  return indexes;
}

// will eventually set the word from Api or word list
 startGame=()=>{
   const {dispatch} = this.props;
   dispatch(setWord(randomWords()))
   dispatch(toggle())
 }

 //main function where the gussedletter is compared and the game updated
 guess=(letter, event)=>{
  event.target.setAttribute("disabled",true)
  const word = this.props.wordToGuess; 
  const {dispatch} = this.props;
  
  dispatch(addLetter(letter))
  //see above declaration
  let indexes = this.getIndexes(word, letter)
 
  if (indexes.length>0){
    indexes.forEach((elementIndex)=>{
      dispatch(right(elementIndex))
    })
    this.checkWin()
  } else{
    dispatch(loseLife())

  }
}
checkWin=()=>{
  let win = true
  this.props.wordToGuess.forEach(letter=>{
    if(!letter.guessed){
      win=false
    }
  })
  if(win){
    const {dispatch} = this.props;
    dispatch(setWin())
  }
}
restart=()=>{
  const {dispatch} = this.props;
  dispatch(reset())
}

displayWord=()=>{
 let word = ''
  this.props.wordToGuess.forEach(e => {
    word+=e.letter
  });
  return word
}


  render() {
    
    let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    return (
      <div className="main">
        {!this.props.game? <button className="start" onClick={this.startGame}>START</button>:
        <div className="game-screen">
          <h2>{this.props.win? "Congrats you win": ''}</h2>

          <h1 className="word">
            {this.props.wordToGuess.map((letter,i)=><span key={i} >{letter.guessed? letter.letter: "_"} </span>)}
          </h1>
          <div className="button-cont">
            {alph.map(letter=><button  key={letter} onClick={(event)=>this.guess(letter,event)}>{letter}</button>)}
          </div>

          <div className="lives">
            {this.props.lives>0?<Rate disabled character={<HeartFilled/>} style={{color:"red"}} value={this.props.lives}/>:<p> You lost :( the word was <strong>{this.displayWord()}</strong></p>}
          </div>

          <div className="reset">
            <button onClick={this.restart}>reset</button>
          </div>
        </div>
        }  
      </div>
    )
  }
}
const mapStateToProps = state => {
  const { guessedLetters, lives, wordToGuess, win, game} = state
  return { guessedLetters, lives, wordToGuess, win, game }
}

HangmanControl = connect(mapStateToProps)(HangmanControl)
export default HangmanControl
