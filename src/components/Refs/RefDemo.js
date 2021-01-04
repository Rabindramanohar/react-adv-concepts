import React, {Component    } from 'react';

class RefDemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.inputRef = React.createRef();  
    }

    componentDidMount() {
        this.inputRef.current.focus();
        this.inputRef.current.placeholder = "Enter you name..";
        console.log(this.inputRef.current.className);
    }

    onSubmit = () => {
        console.log(this.inputRef.current.value);
    }
    render() { 
        return (
            <>
                <input className = "test" type = "text" ref = {this.inputRef}/>
                <button onClick={this.onSubmit}>submit</button>
            </>
        );
    }
}
 
export default RefDemoComponent;