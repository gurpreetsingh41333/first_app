import React, { Component } from "react";
export default class Input extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placehoder={this.props.placeholder}
                        onChange={this.props.onChange} />
                </div>
                <br />
                <div>
                    <input type="checkbox" onChange={this.props.onChangecheckbox} />This is checkbox
                </div>
                <div>
                    <div>
                        <h3>Username:{this.props.text}</h3>
                    </div>
                    <div>
                        <h3>
                            Checkbox:{this.props.initialstate ? "Checked" : "Unchecked"}
                        </h3>
                        {console.log(this.props.initialstate)}
                    </div>
                </div>
            </div>
        );

    }
}