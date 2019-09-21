import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { thisExpression } from '@babel/types';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {
        constructor(props){
            super(props)
            this.state = prepareStateFromWord(this.props.value)
        }
    
    activationHandler = (c) => {
        let guess = [this.state.guess] + c
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess == this.state.word){
                this.setState({guess: [], completed: true,}
                
                )

            }else{
                let shuf = _.shuffle(Array.from(this.state.word))
                this.setState({guess: [], chars : shuf, attempt: this.state.attempt + 1})
            }
        }
     }
    render() {
        return (
            <div>
                <h2>ROUND : {this.state.attempt}</h2>
                { Array.from(this.state.chars).map((c, i) => 
                <CharacterCard value={c} key={i} 
                activationHandler={this.activationHandler} 
                attempt={this.state.attempt}/>)}
                <p>{this.state.completed? "PARIS":""}</p>
                <p>{this.state.completed? "WINNER":""}</p>
                <img src="https://www.themarkethink.com/wp-content/uploads/2015/08/escandalosos.jpg" height="200" width="350"></img>
                <p>Rattawan Putnual 6010110301 </p>
            </div>
        );
    }

}
