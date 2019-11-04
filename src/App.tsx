import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

// You can find imports from custom components
import Card from './Card/Card';
import GuessCount from './GuessCount/GuessCount';
import HallOfFame, { FAKE_HOF } from './HallOfFame/HallOfFame'
import Header from './Header/Header'
import Separator from './Separator/Separator'


// Global style for the app is reach there
import './App.css';

const SIDE = 3
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'


export default class App extends Component {
  cards = this.generateCards()
  user = {
    admin: true
  }

  generateCards() {
    const result: any[] = [];
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Separator />
        <GuessCount guesses={0} />
        <Separator />
        <div className="cardsContainer">
          {
            this.cards.map((card, index) => {
              return <Card
                card={card}
                key={index}
                feedback="visible"
                onClick={this.handleCardClick} />
            })}
        </div>
        <Separator />
        <HallOfFame entries={FAKE_HOF} />
      </div>
    );
  };
}