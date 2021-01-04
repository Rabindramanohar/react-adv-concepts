const ErrorDemoComponent = (props) => {

    if(props.name !== "robin") {
        throw new Error();
    }
    return ( 
        <>
            {props.name}
        </>
     );
}
 
export default ErrorDemoComponent;