import React,{useContext} from 'react';
import {Store} from './App'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from './icon'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: '100%',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
  },
}));

type HourData= {
key: string,
dateTime: string,
weather: string,
temp: number
}

const EveryHourData =(props: HourData)=>{
  const {weatherData} = useContext(Store)

  const classes = useStyles()
    return (
        
            
            <List className={classes.root}>
    
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon props={props.weather} size="30"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`weather:  ${props.weather},     temperature: ${props.temp}`} secondary={props.dateTime} />
      </ListItem>
    </List>
       
    )
}

export default EveryHourData

