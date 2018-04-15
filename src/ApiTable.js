import React, { Component } from "react";
export default class ApiTable extends Component {
    constructor() {
        super()
        this.state = {
            datalist: null
        }
    }

    onHandleGet = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        )
            .then(response => response.json())
            .then(json => {
                this.setState({
                    datalist: json

                })
                console.log(this.state.datalist)
            })
    }
    render() {
        let datalist=this.state.datalist
        return (
            <div className="container">
                <div>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datalist==null?null:datalist.map((row)=>{
                                return <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                            </tr>
                            })}
                            
                        </tbody>

                    </table>
                </div>
                <div>
                    <button onClick={this.onHandleGet} className="btn btn-success"> Get API</button>
                </div>
            </div>
        );
    }
} 