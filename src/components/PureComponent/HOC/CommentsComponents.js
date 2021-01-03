import React from 'react';
import HOC from './HOC';

class CommentsComponents extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleComments = () => {
        this.setState({count: this.state.count+1});
    } */ // no need to write again bcoz we are using hoc here
    render() {
        return(
            <div>
                <div>{this.props.CountNumber}</div>
                <button onClick = {this.props.handleClick}>comments✍</button>
            </div>
        )
    }
}

const EnhancedCommentComponent = HOC(CommentsComponents, 10);
export default EnhancedCommentComponent;