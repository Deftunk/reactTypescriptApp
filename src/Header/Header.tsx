import React from 'react'
import { AppBar, IconButton, Typography, Button, Toolbar, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './Header.css'
import SimpleLogin from '../SpotifyLogin/SpotifyLogin'
import { UserContext } from '../User/User-context'
import ThemeTogglerButton from '../Themed-button/Themed-button';

interface HeaderProps { }
interface HeaderState { }

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount(): Promise<void> {
        // const payload = await fetch("http://localhost:3001/home")
        // const data = await payload.json();
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
                        <ThemeTogglerButton></ThemeTogglerButton>
                        <UserContext.Consumer>
                            {({ connected }) => {
                                return connected ? <Button color="inherit"> Profile </Button> : <SimpleLogin></SimpleLogin>
                            }}
                        </UserContext.Consumer>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    }
}