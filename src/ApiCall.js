import React from 'react'

export default class ApiCall extends React.Component {
    handleClickGet = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    handleClickPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Developer Name',
                body: 'Sunaina',
                userId: 101
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    handleClickPut = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'DeveloperName',
                body: 'Gurpreet Singh',
                userId: 102
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickGet}>GET API call</button>
                <button onClick={this.handleClickPost}>POST API call</button>
                <button onClick={this.handleClickPut}>PUT API call</button>
            </div>
        );
    }
}