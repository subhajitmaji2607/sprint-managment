import React from "react";

//imports
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

//components
import GeneralCard from "sharedComponent/GeneralCard";

const useStyles = makeStyles({
  border: {
    border: "2px solid black",
  },
});
function DashboardDefault() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 320, height: 140 }}>
            <GeneralCard
              data={509}
              title={"Total Task"}
              backGroundColor="rgb(216 242 241)"
	      icon="add_task"
	      color="rgb(72 122 125)"
            />
          </Box>

          <Box sx={{ width: 320, height: 140 }}>
            <GeneralCard
              data={396}
              title={"Task Completed"}
              backGroundColor="#d3ffbc"
	      icon="task_alt"
	      color="rgb(77 156 161)"
            />
          </Box>

          <Box sx={{ width: 320, height: 140 }}>
            <GeneralCard
              data={96}
              title={"Task In Progres"}
              backGroundColor="#ffeb88"
	      icon="task"
	      color="rgb(237 108 79)"
            />
          </Box>

          <Box sx={{ width: 320, height: 140 }}>
            <GeneralCard
              data={17}
              title={"Task Not Assigned"}
              backGroundColor="#ffc2ce"
	      icon="assignment_ind"
	      color="rgb(170 96 116)"
            />
          </Box>

          <Box sx={{ width: 320, height: 140 }}>
            <GeneralCard
              data={12}
              title={"Total Team Member"}
              backGroundColor="#d3ffbc"
	      icon="group"
	      color="rgb(77 156 161)"
            />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default DashboardDefault;
