import React,{useEffect, useState} from "react";

//imports
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";
import CardSection from "./CardSection";
import { Paper } from "@mui/material";

import ProjectSummary from "./ProjectSummary";
import UserList from "./UserList";
import Table from "./Table";

const useStyles = makeStyles({
    border: {
        border: "2px solid black",
    },
    projectSummarySection:{
        height: '70px',
        width: '100%',
        marginBottom: '12px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
        borderRadius: 5
    },
    thirdSection:{
        height: '100%',
        marginTop: 13,
        display: 'flex',
        flexDirection: 'row'
    },
    chartSection:{
        height: '100%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    TeamMemberList:{
        height: '65vh',
        width: '20%',
    },
    TopChartSection:{
        height: '50%',
        width: '100%',
        display: 'flex',
        flexDirection:'row'
    },
    LeftSectionOfTopChartSection:{
        height:'100%',
        width:'50%',
    },
    RightSectionOfTopChartSection:{
        height:'100%',
        width:'50%',
        paddingLeft: 13
    },
    bottomChatSection:{
        height: '50%',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    }
});

function DashboardDefault() {

    const classes = useStyles();

    const options = {
        title: {
            text: 'Sprint vs complete task',
            align: 'left'
        },
        colors: ['#269ffa'],

        dataLabels: {
            enabled: false,
        },
        xaxis: {
            labels: {
                show: true
            }
        },
        labels: ['sprint-1', 'sprint-2', 'sprint-3', 'sprint-4','sprint-5','sprint-6']
    }

    const options2 = {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Task by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    const softwareSubscriptionSeries = [
        {
            name: 'completed task',
            data: [4, 6, 3, 2, 1, 3]
        },
    ]
    const series=  [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]

    return (
        <>
            <Box className={classes.projectSummarySection}>
                <ProjectSummary/>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <CardSection/>
            </Box>

            <Box
            className={classes.thirdSection}>

                <div className={classes.chartSection}>

                    <div className={classes.TopChartSection}>
                        <div className={classes.LeftSectionOfTopChartSection}>
                            <Paper style={{height:'100%',width: '100%'}}>
                                <Chart
                                    options={options}
                                    series={softwareSubscriptionSeries}
                                    type='bar'
                                    width="100%"
                                    height='100%'
                                />
                            </Paper>
                        </div>

                        <div className={classes.RightSectionOfTopChartSection}>
                            <Paper style={{height:'100%',width: '100%'}}>
                                <Chart
                                    options={options2}
                                    series={series}
                                    type='line'
                                    width="100%"
                                    height='100%'
                                />
                            </Paper>
                        </div>

                    </div>

                    <div className={classes.bottomChatSection}>
                        <Paper style={{height:'100%',width: '100%'}}>
                            <Table/>
                        </Paper>
                    </div>

                </div>
            
                <div className={classes.TeamMemberList}>
                    <UserList/>
                </div>
            </Box>  
        </>
    );
}

export default DashboardDefault;
