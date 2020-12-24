import React from "react";
import {Child} from "./Child";
export function Parent():any{
    
const str:string="Hello";
const num:number=100;
const bol:boolean=true;
const arry:any[]=[10,20,30,40];
const obj:any={sub_one:"Reactjs",sub_two:"Angular",sub_three:"Nodejs"};

    return( 
        <React.Fragment>
            <Child str={str} 
                num={num}
                bol={bol}
                arry={arry}
                obj={obj}
               
               
                ></Child>
        </React.Fragment>
    )
};

      