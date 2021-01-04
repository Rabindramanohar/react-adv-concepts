import React, {Component} from 'react';

class ErrorBoundriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: "",
            errorInfo: "",
         }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: error,
            errorInfo : errorInfo
        })
    }
    render() { 
        if(this.state.hasError) {
            return ( 
                <>
                    <h3>Error:</h3> {this.state.error.toString()} <br />
                    <h4>Error Info: </h4> {this.state.errorInfo.componentStack}
                </>
             );
        } else {
            return this.props.children;
        }
    }
}
 
export default ErrorBoundriesComponent;