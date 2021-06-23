import {AppBar,makeStyles,Toolbar,Typography,Box,withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
//components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
const useStyle=makeStyles(
    {
        header:{
            background: '#2874f0',
            height:55
        },
        logo:{
            width:75
        },
        subURL:{
            width: 10,
            height: 10,
            marginLeft: 4
        },
        container:
        {
            display: 'flex',
        },
        component:
        {
            marginLeft:'12%',
            lineHeight:0,
            textDecoration:'none',
            color:'#fff'
        },
        subheading:
        {
            fontSize: 10,
            fontStyle:'italic'
        }
    }
)
const ToolBar= withStyles(
    {
        root:{
            minHeight:55
        }
    }
)(Toolbar);
const Header=()=>{
    const classes=useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    
    return(
        <AppBar position="fixed" className={classes.header}>
          
            <ToolBar>
            <Link to='/'className={classes.component}>
            <Box>
              <img src={logoURL} className={classes.logo}></img>
                <Box className={classes.container}>
                    <Typography className={classes.subheading}>Explore<Box component="span" style={{color: '#ffe500'}}> Plus</Box></Typography>
                    <img src={subURL} className={classes.subURL} />
                </Box>
                </Box>
                </Link>
                <SearchBar></SearchBar>
                <HeaderButtons></HeaderButtons>
             </ToolBar>
            
        </AppBar>
    )
}
export default Header;  