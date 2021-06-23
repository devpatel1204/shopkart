import Carousel from "react-material-ui-carousel";
import { makeStyles } from '@material-ui/core';
import {bannerData} from '../../constatnt/data';
const useStyle=makeStyles(
    {
        Carousel:{ margin:10
            
        },
        image: {
            width: '100%',
            height: 280,
    }
}
)
const Banner=()=>{
    const classes=useStyle();
    return(
        <Carousel autoPlay={true}

        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycyleNavigation={true}navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    
                    width: 30,
                    height:75
                }
            }}>
        {
            bannerData.map(image => (
                <img src={image} className={classes.image} />
            ))
        }
    </Carousel>
    )
}
export default Banner;