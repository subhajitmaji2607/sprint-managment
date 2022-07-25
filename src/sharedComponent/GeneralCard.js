//style
import { Card, CardContent, CardHeader, Divider, Typography,Icon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';

const useStyles = makeStyles({
  cardContainer:{
    // border: '2px solid black',
    height: '100%',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    display: 'flex',
    flexDirection: 'row',
  },
  iconSection:{
    // border: '2px solid black',
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }	,
  iconBackground:({backGroundColor,color})=>({
    // border: '2px solid black',
    height: 80,
    width: 80,
    borderRadius: '50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:backGroundColor,
    color:color
  }),
  textSection:{
    // border: '2px solid black',
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headingAndDataSection:{
    // border: '2px solid black',
    width: '100%',
    height: '50%',
    display: 'flex',
    // alignItems: 'center',
    paddingLeft: 10,
  },
  dataSection:{
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px',
    paddingTop: '20px'
  },
  text:{
    paddingTop: '10px',
    fontSize: '17px'
  }
});


function GeneralCard({
  data,
  title,
  backGroundColor='',
  icon='',
  color=''
}) {
  const classes = useStyles({backGroundColor,color})


  return (
    <>
      <Card variant="outlined" className={classes.cardContainer}>
        <div className={classes.iconSection}>
          <div className={classes.iconBackground}>
            <Icon style={{fontSize: 35}}>{icon}</Icon>
          </div>
        </div>

        <div className={classes.textSection}>
          <div className={classes.headingAndDataSection}>
            <span className={classes.dataSection}>{data}</span>
          </div>

          <Divider/>
          
          <div className={classes.headingAndDataSection}>
            <span className={classes.text}>{title}</span>
          </div>
        </div>
      </Card>
    </>
  )
}

export default GeneralCard
