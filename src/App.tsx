import React, { Component } from 'react'

// You can find imports from custom components
import Header from './Header/Header'
import Separator from './Separator/Separator'

// Global style for the app is reach there
import './App.css';
import { Card, CardMedia, Grid, Container, CardActionArea, CardContent, Typography } from '@material-ui/core';

interface AppProps {
}

interface AppState {
  spotifyCredentials: object | null
  spotifyUser: any
}
export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      spotifyUser: null,
      spotifyCredentials: null,
    }
  }

  spotifyLoginCb = (user, credentials) => {
    this.setState({
      spotifyCredentials: credentials,
      spotifyUser: user
    });
  }

  render = () => {
    if (this.state.spotifyUser) {
      console.log(this.state.spotifyUser.images);
    }

    return <div className="App">
      <Header connexionCallback={this.spotifyLoginCb} />
      <Container>
        <Grid container
          direction="column"
          justify="center"
          alignItems="stretch">
          <Grid item>
            <Grid container direction="row" justify="center">
              <Grid item>
                {this.state.spotifyUser ? <Card style={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 140, width: 300 }}
                      image={this.state.spotifyUser.images[0].url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {this.state.spotifyUser.display_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card> : <div></div>}
              </Grid>

            </Grid>
          </Grid>
          <Grid item>
            <Separator />
          </Grid>
        </Grid>
      </Container>
    </div>
  };
}