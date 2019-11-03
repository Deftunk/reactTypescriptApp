import * as React from 'react';
import Header from './Header/Header'
import Separator from './Separator/Separator'
import './App.css';
import GuessCount from './GuessCount/GuessCount';
import Card from './Card/Card';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header> </Header>
        <Separator></Separator>
        <GuessCount guesses={0} />
        <Separator></Separator>
        <div className="cardsContainer">
          <Card card="😀" feedback="hidden" />
          <Card card="🎉" feedback="justMatched" />
          <Card card="💖" feedback="justMismatched" />
          <Card card="🎩" feedback="visible" />
          <Card card="🐶" feedback="hidden" />
          <Card card="🐱" feedback="justMatched" />
        </div>
      </div>
    );
  };
}