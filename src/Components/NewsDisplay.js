import React from 'react'
import Typography from '@material-ui/core/Typography';
const fontBold = {
    fontWeight : 'bold'
}
function NewsDisplay(props) {
    //console.log(props);
    return (
        <Typography variant="body2" color="textSecondary" component="p" style={fontBold} >
           {props.data.description}
        </Typography>
    )
}

export default React.memo(NewsDisplay)
