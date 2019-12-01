import React from 'react'
import { Button, Grid, TextField, FormControl, InputLabel, InputAdornment, IconButton, Input } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './Login.css'

interface LoginProps { }

interface LoginState {
    email: string
    password: string
    showPassword: boolean
}
export default class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            showPassword: false
        }
    }

    handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState({ ...this.state, showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    render() {
        return <div className="login">
            <form className="loginForm">
                <Grid container direction="row" justify="center" spacing={2}>
                    <Grid item>
                        <TextField id="standard-basic" label="Email" />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}>
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" style={{ marginTop: 6 }} > Login </Button>
                    </Grid>
                </Grid>
            </form>
        </div >
    }

}