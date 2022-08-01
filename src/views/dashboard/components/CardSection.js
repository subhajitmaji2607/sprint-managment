import React from 'react'
import Box from "@mui/material/Box";
import GeneralCard from "shared/GeneralCard";

function CardSection() {
    return (
        <>
            <Box sx={{ width: 320, height: 80 }}>
                <GeneralCard
                    data={509}
                    title={"Total No of Task"}
                    backGroundColor="rgb(216 242 241)"
                    icon="add_task"
                    color="rgb(72 122 125)"
                />
            </Box>

            <Box sx={{ width: 320, height: 80 }}>
                <GeneralCard
                    data={396}
                    title={"Total No of Task Completed"}
                    backGroundColor="#d3ffbc"
                    icon="task_alt"
                    color="rgb(77 156 161)"
                />
            </Box>

            <Box sx={{ width: 320, height: 80 }}>
                <GeneralCard
                    data={96}
                    title={"Total No of Task Inprogres"}
                    backGroundColor="#ffeb88"
                    icon="task"
                    color="rgb(237 108 79)"
                />
            </Box>

            <Box sx={{ width: 320, height: 80 }}>
                <GeneralCard
                    data={17}
                    title={"Total No of Task Not Assigned"}
                    backGroundColor="#ffc2ce"
                    icon="assignment_ind"
                    color="rgb(170 96 116)"
                />
            </Box>

            <Box sx={{ width: 320, height: 80 }}>
                <GeneralCard
                    data={12}
                    title={"Total Team Member"}
                    backGroundColor="#d3ffbc"
                    icon="group"
                    color="rgb(77 156 161)"
                />
            </Box>
        </>
    )
}

export default CardSection