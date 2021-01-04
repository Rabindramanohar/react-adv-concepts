import React from 'react';



const ChildRefComponent = React.forwardRef((props, ref) => (
        <>
            <h2 style = {{border: "1px solid red"}}>Inside the ChildRef Component</h2>
            <input type = "text" ref = {ref} />
        </>
));

export default ChildRefComponent; 