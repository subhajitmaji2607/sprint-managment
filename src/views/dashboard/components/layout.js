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

    const barChatOptions = {
        title: {
            text: 'Sprint wise completed task',
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

    const donutChatoptions = {
        title: {
            text: 'Total no of task in ongoing sprint',
            align: 'left'
        },
        colors: ['#269ffa','#355a9b','#80d8ff','#29b6f6','#b3e5fc'],

        dataLabels: {
            enabled: false,
        },

        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: 55,
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: `Total Task`,
                            color: ['black'],
                            fontSize: '18px',
                            // formatter: () => `${total ? total : 0}`
                        }
                    }
                }
            }
        },

        labels: ['TODO', 'Inprogress', 'Dev-testing', 'UAT','Done']
    }
    

    const barChatSeries = [
        {
            name: 'completed task',
            data: [34, 26, 100, 2, 11, 33]
        },
    ]
    
    const donutChatSeries=  [44, 55, 41, 17, 15]

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
                                    options={barChatOptions}
                                    series={barChatSeries}
                                    type='bar'
                                    width="100%"
                                    height='100%'
                                />
                            </Paper>
                        </div>

                        <div className={classes.RightSectionOfTopChartSection}>
                            <Paper style={{height:'100%',width: '100%'}}>
                                <Chart
                                    options={donutChatoptions}
                                    series={donutChatSeries}
                                    type='donut'
                                    width="88%"
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
