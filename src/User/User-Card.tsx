import React from "react";
import { SpotifyUser } from "./User-context";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Paper} from "@material-ui/core";
import './User-card.css'

interface UserCardProps {
    user: SpotifyUser
}

interface UserCardState { }

export default class UserCard extends React.Component<UserCardProps, UserCardState> {
    render = () => {
        const { user } = this.props;
        console.log(user);
        return <Grid container spacing={4}
            justify="center"
            alignItems="center">
            <Grid item>
                <Card style={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            style={{ height: 300, width: 300 }}
                            image={user.images[0].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {user.display_name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Paper className="user-description">
                    <Typography variant="h5" component="h3">
                        {user.email}
                    </Typography>
                    <Typography component="p">
                        You got {user.followers.total} followers.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    }
}