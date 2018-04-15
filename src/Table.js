import React, { Component } from "react";
import content from "./data.json"

const tableData = {
    "Name": "ZUZU",
    "Sex": "Female",
    "Hobbies": [
        "Playing",
        "Dancing",
        "Singing"
    ]
}

export default class Table extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered"> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>Hobbies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{content.Name}</td>
                            <td>{content.Sex}</td>
                            <td>{content.Hobbies[0]}</td>
                        </tr>
                        <tr>
                            <td>{tableData.Name}</td>
                            <td>{tableData.Sex}</td>
                            <td>{tableData.Hobbies[1]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}