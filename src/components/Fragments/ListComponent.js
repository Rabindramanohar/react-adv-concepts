import React, {Component} from 'react';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        const colors = [
            {
                id: 1,
                color: "red"
            },
            {
                id: 2,
                color: "green"
            },
            {
                id: 3,
                color: "blue"
            },
        ]
        return ( 
            <>
                {colors.map(item => {
                   return (
                        <React.Fragment key = {item.id}>{`${item.color} `}</React.Fragment>
                    )
                })}
            </>
         );
    }
}
 
export default ListComponent;