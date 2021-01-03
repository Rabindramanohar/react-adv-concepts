import React, { Component } from 'react';

class NormalComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
        }
    }
    handleClick = () => {
        this.setState({count: this.state.count+1});
    }
    render() { 
        console.log("Normal compoment..");
        return ( 
            <div>
                <h1>Normal Component</h1> <br />
                {this.state.count}
                <button onClick = {this.handleClick}>Inc</button>
            </div>
         );
    }
}
 
export default NormalComponent;