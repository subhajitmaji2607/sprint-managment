import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";

import { List,ListItem,ListItemAvatar,ListItemText,ListItemSecondaryAction,Avatar, Badge } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { style } from '@mui/system';

const useStyles = makeStyles({
    root: {
        paddingLeft: 10,
        display:'flex',
        flexDirection: 'column'
    },
    title:{
        fontSize: 20,
        padding: 5,
        backgroundColor: '#ffffff'
    },
    list:{
        height: '65vh',
        overflow: 'auto',
        overflowX: 'hidden',
    },
    '.MuiListItemSecondaryAction-root':{
        right: '54px !important'
    }
});
function UserList() {
    const classes = useStyles()
    const [user,setUser] = useState([
        {id: 3,name: 'Arpan Maji',role:'Developer'},
        {id: 4,name: 'Subhajit Maji',role:'Jr. Developer'},
        {id: 5,name: 'Sayan Kundu',role:'QA Tester'},
        {id: 6,name: 'Aurkid saha',role:'Developer'},
        {id: 7,name: 'Anushree Ch...',role:'Developer'},
        {id: 1,name: 'Biyas Sen',role:'QA Tester'},
        {id: 2,name: 'Debaroti Sarkar',role:'Manager'},
        // {id: 8,name: 'user8',role:'Developer'},
        // {id: 9,name: 'user9',role:'QA Tester'},
        // {id: 10,name: 'user10',role:'Developer'},
        // {id: 11,name: 'user11',role:'Developer'},
        // {id: 12,name: 'user12',role:'QA Tester'},
        // {id: 13,name: 'user13',role:'Developer'},
        // {id: 14,name: 'user14',role:'Developer'},
        // {id: 15,name: 'user15',role:'Developer'},
        // {id: 16,name: 'user16',role:'Developer'},
        // {id: 17,name: 'user17',role:'Developer'},
        // {id: 18,name: 'user18',role:'Developer'},
    ])
    return (
        <div className={classes.root}>
            <span className={classes.title}>Active Users</span>
            <List sx={{ bgcolor: 'background.paper' }} className={classes.list}>
                {
                    user.map((item)=>{
                        return(
                            <ListItem key={item.id} style={{cursor: 'pointer'}}
                                secondaryAction={
                                    <Badge color="success" variant="dot"/>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: deepOrange[100] }}>{item.name.charAt(0)}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary={item.role} />
                            </ListItem>
                        )
                    })
                }
            </List> 
        </div>
    )
}

export default UserList