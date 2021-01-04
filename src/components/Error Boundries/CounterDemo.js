import React, {Component} from 'react';

class CounterDemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    handleClick = () => {
        this.setState({count: this.state.count+1})
    }
    render() { 
        if(this.state.count === 5) {
            throw new Error("Error occured!!");
        }
        return ( 
            <>
                <div>{this.state.count}</div>
                <button onClick = {this.handleClick}>Increment</button>
            </>
         );
    }
}
 
export default CounterDemoComponent;