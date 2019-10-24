import React, {Fragment} from "react";
import Input from "components/Input";
import Button from "components/Button";



class InputChat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler (e){
       this.setState({
           text: e.target.value
       })
    }

    render(){
        return (
            <div>
                <Input type={'text'} value={this.state.text} onChange={this.inputHandler}/>
                <Button onClick={()=>{
                    console.log(this.state.text)
                }} />
            </div>
        );
    }


}

export default InputChat

