import React, { PureComponent } from 'react';

class PureComponents extends PureComponent {
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
        console.log("Pure compoment..");
        return ( 
            <div>
                <h1>Pure Component</h1> <br />
                {this.state.count}
                <button onClick = {this.handleClick}>Inc</button>
            </div>
         );
    }
}
 
export default PureComponents;