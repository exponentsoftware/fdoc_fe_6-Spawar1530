import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    poster: {
        
    }
  });

export default function Poster(props) {

    const movies = props.movies;
    console.log(movies) 

    const classes = useStyles();
    return (
        <div>
            {movies.map((movie) => {
                return  <div style={{ display:"inline-block", float:"inline-start"}}>
                  <h3>Movies</h3>
                <Card className={classes.root} style={{marginBlock:"5%", paddingRight:"2%"}} key={movie.id}>
                <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movie.src}
                title={movie.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.Description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
            
            </div>
            })}
        </div>
    )
}
