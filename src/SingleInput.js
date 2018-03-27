import React, {Component} from "react";

export default class SingleInput extends Component{
constructor(){
    super()
    this.state={
        text:null
    }
}

    render(){
        console.log()
        return(
            <div>
                <input type="text"/>
            </div>
        );
    }



}