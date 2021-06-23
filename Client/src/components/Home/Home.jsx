import { Box } from "@material-ui/core";
import NavBar from "./NavBar";
import Banner from "./Baner";
import { makeStyles } from "@material-ui/core";
import Cart from "../Cart/cart";
  const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home=()=>{
  const classes=useStyle();
    return(<Box>
      <NavBar></NavBar>
      <Box className={classes.component}>
      <Banner ></Banner>
      </Box>
      </Box>
    )
}
export default Home;