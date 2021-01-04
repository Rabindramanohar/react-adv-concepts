import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    state = { count: 0, }

    onIncrement = () =>{
        this.setState({count: this.state.count+1})
    }

    render() { 
        return ( 
            <>
             <div>Count Number: {this.state.count}</div>
             <ChildComponent increment = {this.onIncrement} />
             </>
         );
    }
}
 
export default ParentComponent;