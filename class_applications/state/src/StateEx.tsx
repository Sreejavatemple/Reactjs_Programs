import React,{useState} from "react";
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

export function StateEx():any{
const [wish,sayWish]=useState("GOOD MORNING");
const [num,Mynum]=useState(100);
const [flag,Myflag]=useState(true);
const arr:number[]=[10,20,30];
const [numArr,myArr]=useState(arr);
const obj:any={
    "sub_one":"Reactjs",
    "sub_two":"Angular",
    "sub_three":"MongoDb"
};
const [obj1,obj2]=useState(obj);
const Student:any[]=[{"sid":111,"sname":"Sree","marks":450},
                       {"sid":111,"sname":"Yammu","marks":500},
                       {"sid":111,"sname":"Vandu","marks":400}];
    const [getStudents,allStudents]=useState(Student);
return(
    <React.Fragment>
     <Typography variant="h1" color="primary" align="center">
         {wish}

     </Typography>
     <Typography variant="h1" color="error" align="left">
         {num}

     </Typography>
     <Typography variant="h1" color="secondary" align="right">
         {JSON.stringify(flag)}

     </Typography>
    {arr.map((element:any,index:any):any=>(
        <Typography key={index} variant="h1" align="left" color="textSecondary">
            {element}
        </Typography>
    ))}
    <Typography variant="h1" color="secondary" align="right">
        
 
   {obj.sub_one}...{obj.sub_two}...{obj.sub_three}
   </Typography>
   <Typography color="primary" align="center">
   <TableContainer>
       <Table>
           <TableHead>
               <TableCell>SNO</TableCell>
               <TableCell>SID</TableCell>
               <TableCell>SNAME</TableCell>
               <TableCell>MARKS</TableCell>
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
   </Typography>

   
</React.Fragment>
    
         

  
    
)
}
