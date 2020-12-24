import React from "react";
import {Typography,Paper,TableContainer,Table} from "@material-ui/core";
export function Child(props:any):any{
    const {str,num,bol,arry,obj}=props;


    return(
<React.Fragment>



    <Typography variant="h1" 
    color="primary" 
    align="center">
        {str}
    </Typography>
    <Typography
    color="secondary" 
    align="left">
    {num}
    </Typography>
    <Typography variant="h1" 
    color="primary" 
    align="center">
        {JSON.stringify(bol)}
    </Typography>
    {arry.map((element:any,index:any):any=>(
        <Typography variant="h3"
        color="error"
        >
            {element}
</Typography>
    ))}
  
<Typography variant="h1" color="inherit">
   {obj.sub_one}....{obj.sub_two}....{obj.sub_three}

</Typography>
</React.Fragment>
    )
};