import React, {Component} from 'react';
import ChildRefComponent from './ChildRefComponent';

class ParentRefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.myRef = React.createRef();
    }

    handleClick = () =>{
        this.myRef.current.focus();
        this.myRef.current.placeholder = "enter you name..";
        console.log(`value: ${this.myRef.current.value}`);
    }
    render() { 
        return ( 
            <>
                <h1 style = {{border: "1px solid green"}}>Inside the ParentRef</h1>
                <ChildRefComponent ref = {this.myRef}/>
                <button onClick = {this.handleClick}>Click</button>
            </>
         );
    }
}
 
export default ParentRefComponent;