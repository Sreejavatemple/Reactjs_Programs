import React,{useState} from "react";
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
export function StateEx1():any{
    const [Wish,sayWish]=useState("WELCOME");
    const obj:any={"sub_one":"Reactjs","sub_two":"Angular","sub_three":"Nodejs"};
    const[obj1,obj2]=useState(obj);
    const[num,myNum]=useState(500);
    const Student:any=[{"sid":111,"sname":"Sree","marks":500},
                       {"sid":222,"sname":"Yammu","marks":500},
                       {"sid":333,"sname":"Vandu","marks":500}];
                       const [Students,getStudents]=useState(Student);
                       const ar:any[]=[10,20,30,40,50];
                       const [numarr,myarry]=useState(ar);


return(
    <React.Fragment>
        <Typography variant="h1" color="primary" align="center">
            {Wish}
        </Typography>
        <Typography variant="h1" color="secondary" align="left">
            {obj.sub_one}...{obj.sub_two}...{obj.sub_three}
        </Typography>
        <Typography variant="h1" color="error" align="center">
            {num}
        </Typography>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>SNO</TableCell>
                    <TableCell>SID</TableCell>
                    <TableCell>SNAME</TableCell>
                    <TableCell>MARKS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {Student.map((element:any,index:any):any=>(
                   <TableRow key={index}>

                   <TableCell>{index+1}</TableCell>
                   <TableCell>{element.sid}</TableCell>
                   <TableCell>{element.sname}</TableCell>
                   <TableCell>{element.marks}</TableCell>
                   </TableRow>
               ))}
            </TableBody>
            </Table>
        </TableContainer>
        {ar.map((element:any,index:any):any=>(
            <Typography key={index} variant="h1" color="secondary" align="left">
                {element}
           
        </Typography>
        ))}
    </React.Fragment>
)
};