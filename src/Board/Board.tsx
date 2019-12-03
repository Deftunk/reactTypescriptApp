import React from "react";
import { ThemeContext } from "../Themed-button/Theme-context";
import { UserContext } from "../User/User-context";
import { Container, Grid, CardActionArea, CardContent, Typography, Card, CardMedia } from "@material-ui/core";
import Separator from "../Separator/Separator";

interface BodyProps { }
interface BodyState { }
export default class Body extends React.Component<BodyProps, BodyState> {
    render = () => {
        return <ThemeContext.Consumer>
            {({ theme }) => (
                <UserContext.Consumer>
                    {({ user }) => {
                        if (user) {
                            const { images, display_name } = user;
                            return <Container style={{ backgroundColor: theme.background }}>
                                <Grid container
                                    direction="column"
                                    justify="center"
                                    alignItems="stretch">
                                    <Grid item>
                                        <Grid container direction="row" justify="center">
                                            <Grid item>
                                                {user ? <Card style={{ maxWidth: 345 }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            style={{ height: 140, width: 300 }}
                                                            image={images[0].url}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {display_name}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card> : null}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Separator />
                                    </Grid>
                                </Grid>
                            </Container>
                        }
                        else {
                            return <div></div>
                        }
                    }}
                </UserContext.Consumer>)}
        </ThemeContext.Consumer>
    }
}