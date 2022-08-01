import React from 'react'

import { Card,Divider } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { toAppCurrency } from 'utils/toCurrency';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    headingSection:{
        height : '45%',
        padding: '10px',
        fontSize: '18px',
        fontWeight: 500,
        paddingLeft: '25px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'sans-serif'
    },
    dataSection:{
        height : '55%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item:{
        // border: '2px solid black',
        height: '100%',
        width: 300,
        paddingLeft:20,
        paddingTop:5
    },
    itemData:{
        fontSize:15,
        fontWeight:'600',
        paddingTop:8
    }
})


function ProjectSummary() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* <div  className={classes.headingSection}>
                <span>Project Details Summary</span>
            </div>
            <Divider/> */}
            <div  className={classes.dataSection}>
                <div className={classes.item}>
                    Poject Start Date
                    <div className={classes.itemData}>{(new Date()).toDateString('en-In')}</div>
                </div>
                <div className={classes.item}>
                    Total No of Sprint till Date
                    <div className={classes.itemData}>{6}</div>
                </div>
                <div className={classes.item}>
                    Current Sprint
                    <div className={classes.itemData}>{'sprint-6'}</div>
                </div>
                <div className={classes.item}>
                    Current Sprint End Date
                    <div className={classes.itemData}>{new Date().toDateString()}</div>
                </div>
                <div className={classes.item}>
                    work complete percentage
                    <div className={classes.itemData}>{53}%</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary