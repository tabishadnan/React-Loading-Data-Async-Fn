import React, { Component } from 'react';
import axios from 'axios';

export default class GithubUserInfo extends Component {

    state = {
        username : "",
        userImg : "",
    }

    async componentDidMount(){
        let res = await axios.get("https://api.github.com/users/tabishadnan");
        let data = res.data;
        this.setState({
            username : data.name,
            userImg : data.avatar_url
        })
    }

    render() {
        return (
            <div className="GithubUserInfo">
                <h3>{this.state.username}</h3>
                <img src={this.state.userImg} alt={this.state.username} />
            </div>
        )
    }
}
