import { navData } from "../../constatnt/data";
import { Box,Button, makeStyles,Typography,Badge} from '@material-ui/core';
const useStyle=makeStyles({
    component:{
        display: 'flex',
        margin:'55px 130px 0px 130px',
        justifyContent:'space-between'
    },
    container:
    {
        textAlign:'center',
        padding:'12px 30px'
    },
    image:
    {
        width: 64,
    },
    text:
    {
        fontSize:14,
        fontWeight:600
    }

})
const NavBar=()=>{const  classes=useStyle();
    return(
       <Box className={classes.component}>
          {
              navData.map(data=>(
                  <Box className={classes.container}>
                  <img  src={data.url} className={classes.image}></img>
                  <Typography className={classes.text}>{data.text}</Typography>
                  </Box>
              ))
          }
       </Box>
    )
}
export default NavBar;