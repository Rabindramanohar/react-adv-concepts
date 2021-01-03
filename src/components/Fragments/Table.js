import React, { Component } from "react";
import TableDataComponent from "./TableDataComponent";

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <table>
                <tr>
                    <TableDataComponent />
                </tr>
            </table>
         );
    }
}
 
export default TableComponent;