import React, { Component } from "react";
import Input from "./Input"
import Table from "./Table";
import ApiCall from './ApiCall'
import ApiTable from "./ApiTable"

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
                    <form>
                        <div className="form-group">
                            <Input placeholder="text" className="form-control"
                                onChange={(e) => { this.onChange(e) }}
                                text={this.state.text}
                                onChangecheckbox={this.onChangecheckbox} initialstate={this.state.initialstate} />
                        </div>
                    </form>
                   

                </div>
                <div>
                    <Table />
                </div>
                <div>
                    <ApiCall />
                </div>
                <br />
                <div>
                    <ApiTable />
                </div>
            </div>

        );

    }
}