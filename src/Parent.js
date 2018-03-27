import React, { Component } from "react";
import Input from "./Input"
import Table from "./Table";
import ApiCall from './ApiCall'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            text: null,
            initialstate: false

        }
    }
    onChangecheckbox = () => {
        this.setState({
            initialstate: !this.state.initialstate
        })
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>

                    <Input placeholder="text"
                        onChange={(e) => { this.onChange(e) }}
                        text={this.state.text}
                        onChangecheckbox={this.onChangecheckbox} initialstate={this.state.initialstate} />

                </div>
                <div>
                    <Table />
                </div>
                <div>
                    <ApiCall />
                </div>
            </div>
        );

    }
}