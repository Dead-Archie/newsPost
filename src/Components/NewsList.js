import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NewsDisplay from './NewsDisplay';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      display: "inline-block",
      margin: "10px"
    },
    media: {
      height: 200,
    },
  });
  
function NewsList(props) { 
    const classes = useStyles();
    console.log(props)
    
    return (
        <Card className={classes.card} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.details.urlToImage}
              title={props.details.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.details.author}
              </Typography>
              {(props.displayPost?
                <NewsDisplay data={props.details} />
                :
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.details.title}
                </Typography>
              )} 
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick ={()=>window.open(props.details.url)}>
              Link
            </Button>
            <Button size="small" color="primary" onClick={()=>props.onShowNews(props.dataKey)}>
              Learn More
            </Button>
          </CardActions>
        
          
        </Card>
      );
}



export default React.memo(NewsList)

