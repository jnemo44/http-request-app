import React, { Component } from 'react';
import acios from 'axios';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    }


    componentDidUpdate () {
        if (this.props.id) {
            //Only GET if no loaded post or loaded post and id's are different
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }
            
        }
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Select a Post</p>;
        //Give time for the post to be retrieved
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        //Check to see if a post is selected
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;