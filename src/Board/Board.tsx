import React from "react";
import { UserContext } from "../User/User-context";
import { Container } from "@material-ui/core";
import UserCard from "../User/User-Card";
import Tracks from "../Tracks/Tracks";
import Separator from "../Separator/Separator";

interface BoardProps { }
interface BoardState { }
export default class Board extends React.Component<BoardProps, BoardState> {
    render = () => {
        return <Container>
            <UserContext.Consumer>
                {({ connected, user, spotifyCredentials }) => {
                    if (connected) {
                        return <div>
                            <UserCard user={user}></UserCard>
                            <Separator></Separator>
                            <Tracks spotifyCredentials={spotifyCredentials} />
                        </div>
                    }
                }}
            </UserContext.Consumer>
        </Container>
    }
}