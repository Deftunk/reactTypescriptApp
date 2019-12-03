import React from "react";

export interface SpotifyUser {
    display_name: string
    email: string
    external_urls: {
        spotify: string
    }
    followers: {
        href: string,
        total: number
    }
    href: string
    id: string
    images: {
        height: any
        url: string
        width: any
    }[]
    type: string
    uri: string
}

export interface SpotifyCredentials {
    access_token: string
    expires_in: string
    token_type: string
}

export const UserContext = React.createContext({
    user: {
        display_name: "",
        email: "",
        external_urls: {
            spotify: ""
        },
        followers: {
            href: "",
            total: 0
        },
        href: "",
        id: "",
        images: [{ url: "", width: 0, height: 0 }],
        type: "",
        uri: ""
    },
    spotifyCredentials: {
        access_token: "",
        expires_in: "",
        token_type: ""
    },
    connected: false,
    toggleConnection: (user, connected, spotifyCredentials) => {
        console.log("L'utilisateur s'est connecté", user, connected, spotifyCredentials)
    }
});

