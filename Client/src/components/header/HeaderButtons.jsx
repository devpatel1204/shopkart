import { Box,Button, makeStyles,Typography,Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
const usestyle=makeStyles(
    {
        container: {
            display: 'flex',
        },
        wrapper: {
            margin: '0 5% 0 auto', 
            display: 'flex',    
            '& > *': {
                marginRight: 50,
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: 12,
                alignItems: 'center',
                textDecoration:'none',
                color:'#fff'
            }
        },
        login: {
            color: '#2874f0',
            background: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
            padding: '5px 40px',
            height: 32,
            boxShadow: 'none'
        }
    }
)
const HeaderButtons=()=>{
    const classes=usestyle();
    return(
       <Box className={classes.wrapper}>
      
       <Link><Button className={classes.login} variant="contained" >Login</Button></Link>
       <Link><Typography style={{ marginTop: 5, fontSize:12 }}>More</Typography></Link>
       <Link to='/Cart' className={classes.container}>
       <Badge badgeContent={2} color="secondary">
  <ShoppingCartIcon></ShoppingCartIcon>
</Badge>
       <Typography style={{marginLeft :  10, fontSize:12}}>Cart</Typography>
       </Link>
       </Box>
       
    )
}
export default HeaderButtons;