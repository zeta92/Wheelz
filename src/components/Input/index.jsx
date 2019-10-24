import React, {Fragment} from "react";



let Input = (props)=> {


    return (<input type={props.type} value={props.value} onChange={props.onChange}></input>);
}

export default Input

