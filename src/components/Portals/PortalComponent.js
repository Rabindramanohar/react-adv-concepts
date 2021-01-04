import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class PortalComponent extends Component {
    state = {  }
    render() { 
        return ReactDOM.createPortal ( 
            <h1>Inside Portal Component</h1>,

            // document.getElementById('portal');
         );
    }
}
 
export default PortalComponent;