import React from "react";
import Second from "./Second";
export default class First extends React.Component{
    constructor(){
        super();
        this.state={
            key1:"Hello",
            key2:100,
            key3:[{"pid":111,"pname":"laptop","cost":20000},
                 {"pid":222,"pname":"Disk","cost":3000},
                 {"pid":333,"pname":"CPU","cost":50000}]
        }
    }
    render(){
        return(
            <React.Fragment>
               <Second key1={this.state.key1}
                       key2={this.state.key2}
                       key3={this.state.key3}>
               
                   
                   </Second>
            </React.Fragment>
        )
    }
}