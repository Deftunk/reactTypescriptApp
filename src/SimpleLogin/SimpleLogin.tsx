import React from "react"
import { Button } from "@material-ui/core"

export const authEndpoint = 'https://accounts.spotify.com/authorize';

interface SimpleLoginProps {
    callback: Function
}

interface SimpleLoginState {
    url: string
    spotifyCredentials: object
}

export default class Login extends React.Component<SimpleLoginProps, SimpleLoginState> {
    constructor(props) {
        super(props)
        this.state = {
            url: this.buildUrl(),
            spotifyCredentials: this.getSpotifyCredential()
        }
    }

    render() {
        return <div className="simple-login">
            <Button color="inherit" style={{ marginTop: 6 }} href={this.state.url} > Login to spotify </Button>
        </div>
    }

    buildUrl() {
        const clientId = '1c4494f612a54227b2bdbb018bb00d66';
        const redirectUri = "http://localhost:3000";
        const scopes = [
            "user-read-email",
            "user-read-currently-playing",
            "user-read-playback-state",
        ];
        return `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token&show_dialog=true`
    }

    getSpotifyCredential() {
        const credentials = window.location.hash.length ? this.parseHash(window.location.hash) : null
        window.location.hash = "";
        this.props.callback(credentials)
        return credentials
    }

    parseHash(hash) {
        return hash
            .substring(1)
            .split("&")
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
    }
}