import * as React from 'react';
import Header from './Header/Header'
import Separator from './Separator/Separator'
import './App.css';
import GuessCount from './GuessCount/GuessCount';
import Card from './Card/Card';

export default class App extends React.Component {

  user = {
    admin: true
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="App">
        <Header> </Header>
        <Separator></Separator>
        <GuessCount guesses={0} />
        <p>{this.user.admin && <a href="/admin">Faire des trucs de VIP</a>}</p>
        <Separator></Separator>
        <div className="cardsContainer">
          <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
          <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
          <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
          <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
        </div>
        {won && <p>GAGNÉ !</p>}
      </div>
    );
  };
}