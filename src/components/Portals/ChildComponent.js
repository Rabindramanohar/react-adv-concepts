import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ChildComponent extends Component {
    state = {  }
    render() { 
        return ReactDOM.createPortal( 
            <>
                <button onClick = {this.props.increment}>Increment</button>
            </>,

            document.getElementById('portal')
         );
    }
}
 
export default ChildComponent;