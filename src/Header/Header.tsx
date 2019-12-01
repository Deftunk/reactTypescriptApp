import React from 'react'
import './Header.css'
import SimpleLogin from '../SimpleLogin/SimpleLogin'
import { AppBar, IconButton, Typography, Button, Toolbar, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {
    connexionCallback: Function
}

interface HeaderState {

    spotifyCredentials: object | null
    spotifyUser: object | null
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props) {
        super(props)
        this.state = {
            spotifyUser: null,
            spotifyCredentials: null,
        }
    }


    async componentDidMount(): Promise<void> {
        const payload = await fetch("http://localhost:3001/home")
        const data = await payload.json();
        console.log("dataReached from server:", data.helloworld);
    }

    spotifyLoginCb = async (credentials) => {
        if (credentials) {
            const user = await this.getUserData(credentials);
            this.props.connexionCallback(user, credentials);
        }
        this.setState({ spotifyCredentials: credentials });

    }

    async getUserData(credentials) {
        const payload = await fetch('https://api.spotify.com/v1/me', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + credentials.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        const data = await payload.json()
        this.setState({
            spotifyUser: data
        });
        return data;
    }

    render(): JSX.Element {
        return <div className="header">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className="header-burger" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="header-title">
                        DiscoZik
                    </Typography>
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                        {this.state.spotifyCredentials ? <Button color="inherit" style={{ marginTop: 12 }}> Profile </Button> : <SimpleLogin callback={this.spotifyLoginCb}></SimpleLogin>}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    }
}