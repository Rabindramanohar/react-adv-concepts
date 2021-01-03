import React from 'react';
import HOC from './HOC';


class LikeCounts extends React.Component {
    
    render() {
        return(
            <div>
                <div>Hello {this.props.username}</div>
                <div>{this.props.CountNumber}</div> 
                <button onClick = {this.props.handleClick}>Like👍</button>
            </div>
        )
    }
}

const EnhancedLikeComponent = HOC(LikeCounts, 5);
export default EnhancedLikeComponent;