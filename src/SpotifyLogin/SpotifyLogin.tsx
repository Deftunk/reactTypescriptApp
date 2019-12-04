import React from "react"
import { Button } from "@material-ui/core"
import { UserContext, SpotifyUser, SpotifyCredentials } from '../User/User-context'

export const authEndpoint = 'https://accounts.spotify.com/authorize';

interface SpotifyLoginProps { }

interface SpotifyLoginState {
    url: string
    spotifyCredentials: SpotifyCredentials | null
    user: SpotifyUser | null
    connected: boolean
}

export default class SpotifyLogin extends React.Component<SpotifyLoginProps, SpotifyLoginState> {
    constructor(props) {
        super(props)
        this.state = {
            connected: false,
            url: this.buildUrl(),
            spotifyCredentials: this.getSpotifyCredential(),
            user: null
        }
    }

    async componentDidMount() {
        await this.getUserData();
    }

    render() {
        const { connected, user, spotifyCredentials } = this.state;
        return <div className="spotify-login">
            <UserContext.Consumer>
                {({ toggleConnection }) => {
                    if (this.state.connected) {
                        toggleConnection(user, connected, spotifyCredentials)
                    }
                    return <Button color="inherit" href={this.state.url} > Login to spotify </Button>
                }}
            </UserContext.Consumer>
        </div >
    }

    async getUserData() {
        if (this.state.spotifyCredentials) {
            const payload = await fetch(`http://localhost:3001/spotify/me?access_token=${this.state.spotifyCredentials.access_token}`, {
                method: 'get'
            });
            const data = await payload.json()
            this.setState({
                connected: true,
                user: data.body
            });
        }
    }

    buildUrl() {
        const clientId = '1c4494f612a54227b2bdbb018bb00d66';
        const redirectUri = "http://localhost:3000";
        const scopes = [
            "user-read-email",
            "user-read-currently-playing",
            "user-read-playback-state",
            "user-library-read"
        ];
        return `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token&show_dialog=true`
    }

    getSpotifyCredential() {
        const credentials = window.location.hash.length ? this.parseHash(window.location.hash) : null
        window.location.hash = "";
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