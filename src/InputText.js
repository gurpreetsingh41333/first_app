import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class InputText extends Component {
    constructor() {
        super()
        this.state = {
            text: null,
            password: null
        }
    }
    onChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onHandleClick=()=>{
    alert("haww")
    }
    render() {
        let time = new Date()
        console.log(this.state.password)
        return (
            <div>
                <input type="text" name="name" placeholder="text" onChange={(e) => { this.onChange(e) }} />
                <div>
                   
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={(e) => { this.onChangePassword(e) }} />
                </div>
                <div>
                    <button onClick={this.onHandleClick}>Click On Me</button>
                </div>
                <div>
                    <h3>
                        usename: {this.state.text}
                    </h3>
                    <h3>
                        password:
                    </h3>
                    </div>


            </div>
        );
    }
}

export default InputText;
