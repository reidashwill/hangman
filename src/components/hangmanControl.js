// state entered letters =>array
// state of lives => number
// word being guessed => string/array
// actaul hang man => tbd 5 imgs

import React, { Component} from 'react'
import {connect} from "react-redux"
import { Rate } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import randomWords from 'random-words'

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
   const action ={type: "SET_WORD", word: randomWords()}
   dispatch(action)
   dispatch({type: "TOGGLE"})
 }

 //main function where the gussedletter is compared and the game updated
 guess=(letter, event)=>{
   event.target.setAttribute("disabled",true)
  const word = this.props.wordToGuess; 
  const {dispatch} = this.props;
  const action = {type:"ADD_LETTER", letter:letter}
  dispatch(action)
  //see above declaration
  let indexes = this.getIndexes(word, letter)
 
  if (indexes.length>0){
    indexes.forEach((elementIndex)=>{
      let trueAction = {type: 'RIGHT', index:elementIndex}
      dispatch(trueAction)
    })
    this.checkWin()
  } else{
    let livesAction = {type: "LOSE_LIFE"}
    dispatch(livesAction)
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
    let winAction = {type: "SET_WIN"}
    dispatch(winAction)
    setTimeout(() => {
      dispatch({type:"RESET"})
    },3000);
  }
}
restart=()=>{
  const {dispatch} = this.props;
  let resetAction = {type: "RESET"}
  dispatch(resetAction)
}

displayWord=()=>{
 let word = ''
 console.log("something")
  this.props.wordToGuess.forEach(e => {
    word+=e.letter
  });
  setTimeout(() => {
    this.props.dispatch({type:"RESET"})
  },5000);
  return word
}


  render() {
    
    let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    return (
      <div className="main">
        {!this.props.game? <button onClick={this.startGame}>Start</button>:
        <div className="game-screen">
          <h2>{this.props.win? "Congrats you win": ''}</h2>
          <h1>{this.props.wordToGuess.map((letter,i)=><span key={i} >{letter.guessed? letter.letter: "_"} </span>)}</h1>
              {alph.map(letter=><button  key={letter} onClick={(event)=>this.guess(letter,event)}>{letter}</button>)}
              <br/>

          <div className="lives">
            {this.props.lives>0?<Rate disabled character={<HeartFilled/>} style={{color:"red"}} value={this.props.lives}/>:<p> You lost :( the word was <strong>{this.displayWord()}</strong></p>}
          </div>

          <div className="guesses"> 
            <h2>Guesses:</h2>
            {this.props.guessedLetters.map((guess, i)=><span key={i}> {guess} </span>)}
          </div>

          <button onClick={this.restart}>reset</button>
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