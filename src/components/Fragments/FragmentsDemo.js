import React, {Component} from 'react';
import ListComponent from './ListComponent';
import TableComponent from './Table';

class FragmentDemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <TableComponent />
                <ListComponent />
            </>
         );
    }
}
 
export default FragmentDemoComponent;