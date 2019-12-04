import React, { Component } from 'react'

// You can find imports from custom components
import Header from './Header/Header'
import Board from './Board/Board';
import { themes, ThemeContext } from './Themed-button/Theme-context';

// Global style for the app is reach there
import './App.css';
import { UserContext } from './User/User-context';
import { Box } from '@material-ui/core';



interface AppProps {
}

interface AppState {
  // spotifyCredentials and user must typed but there is a nullable error. Need to find a solution
  spotifyCredentials: any
  user: any,
  connected: boolean,
  theme: {
    foreground: string
    background: string
  }
}
export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      connected: false,
      spotifyCredentials: null,
      theme: themes.dark
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  toggleConnection = (user, connected, spotifyCredentials) => {
    this.setState({ user: user, connected: connected, spotifyCredentials: spotifyCredentials })
  }

  render = () => {
    const { theme, user, spotifyCredentials, connected } = this.state;
    return <UserContext.Provider value={{ user, spotifyCredentials, toggleConnection: this.toggleConnection, connected }}>
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Box className="App" style={{ backgroundColor: theme.background }} height="100%">
              <Header />
              <Board></Board>
            </Box>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </UserContext.Provider >
  };
}