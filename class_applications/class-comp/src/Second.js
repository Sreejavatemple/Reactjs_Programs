import React from "react";
export default class Second extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <table border="5px">
                    <tr>
                        <th>SNO</th>
                        <th>PID</th>
                        <th>PNAME</th>
                        <th>COST</th>
                    </tr>
                    {this.props.key3.map((element,index)=>(

                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.pid}</td>
                            <td>{element.pname}</td>
                            <td>{element.cost}</td>


                        </tr>

                    )
                    
                    )}
                    </table>

            </React.Fragment>

        )
    }

}