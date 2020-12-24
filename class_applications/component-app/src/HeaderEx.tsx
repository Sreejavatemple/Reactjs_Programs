import React from "react";
import {makeStyles } from "@material-ui/core";
const useStyles=makeStyles({
"myHeading":{
    color:"red",
    fontWeight:600,
    textAlign:"center"
}
});
export default function HeaderEx(){
    const classes:any=useStyles();
    return (
        <p className={classes.myHeading}>Ecommerce project comming soon...................!!</p>
    )
};
