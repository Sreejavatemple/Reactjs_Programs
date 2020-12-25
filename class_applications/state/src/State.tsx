import React,{useState} from "react";
import {Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
export function State():any{
    const [wish,setWish]=useState("Hello");
    const [num,setNum]=useState(100);
    const [flag,Myflag]=useState(true);
    const arr:number[]=[10,20,30];
    const [myarry,setArry]=useState(arr);
    const employees:any[]=[
        {"eid":111,"ename":"Sree","esal":2000},
        {"eid":222,"ename":"Yammu","esal":2000},
        {"eid":333,"ename":"Vandu","esal":2000}
    ];
    const [Setemployees,getEmployees]=useState(employees);
    const obj:any={"sub_one":"Angular","sub_two":"Reactjs","sub_three":"Nodejs"};
    const[obj1,getobj]=useState(obj);
    return(
        <React.Fragment>
         <Typography variant="h1" color="error" align="center">
             {wish}
         </Typography>
         <Typography variant="h1" color="primary" align="left">
             {num}
         </Typography>
         <Typography variant="h1" color="secondary" align="right">
             {JSON.stringify(flag)}
         </Typography>
        { arr.map((element:any,index:any):any=>( 
             <Typography key={index} variant="h1" color="error" align="center">
             {element}
         </Typography>))}
        <TableContainer>
           <Table>
               <TableHead>
                   <TableRow>
                       <TableCell>EID</TableCell>
                       <TableCell>ENAME</TableCell>
                       <TableCell>ESAL</TableCell>
                        </TableRow>
                   </TableHead>
                   <TableBody>
                     
                           {employees.map((element:any,index:any):any=>(
                                 <TableRow key={index}>
                                     <TableCell>{index+1}</TableCell>
                                     <TableCell>{element.eid}</TableCell>
                                     <TableCell>{element.ename}</TableCell>
                                     <TableCell>{element.esal}</TableCell>
                                     </TableRow>
                           ))}
                    
                       
                   </TableBody>
           </Table>
        </TableContainer>
        <Typography variant="h1" color="primary" align="left">
             {obj1.sub_one}...{obj1.sub_two}...{obj1.sub_three}
         </Typography>
        </React.Fragment>
    )
};