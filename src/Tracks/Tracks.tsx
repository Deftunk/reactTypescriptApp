import React from "react";
import { SpotifyCredentials } from "../User/User-context";
import { GridListTile, GridList, GridListTileBar } from "@material-ui/core";

interface TracksProps {
    spotifyCredentials: SpotifyCredentials
}
interface TracksState {
    tracks: any
}
export default class Tracks extends React.Component<TracksProps, TracksState> {


    async componentDidMount() {
        const payload = await fetch('https://api.spotify.com/v1/me/tracks', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.props.spotifyCredentials.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        const data = await payload.json()
        this.setState({
            tracks: data.items
        });
    }

    render = () => {
        if (this.state && this.state.tracks.length) {
            return <GridList cellHeight={160} cols={3}>
                {this.state.tracks.map(({ track }) => (
                    <GridListTile key={track.id}>
                        <img src={track.album.images[1].url} alt={track.name} />
                        <GridListTileBar
                            title={track.name}
                            subtitle={<span>by: {track.artists[0].name}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        }
        else {
            return <div></div>
        }
    }
}