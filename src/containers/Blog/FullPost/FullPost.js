import React, { Component } from 'react';

import './FullPost.css';
import axios from '../../../axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    //Changed to mount because component is being added/removed from DOM
    componentDidMount () {
        console.log(this.props);
        this.loadData();
        
    }

    //Component did update handles when you click a new post and need to re-render posts page
    componentDidUpdate () {
        this.loadData();
    }

    //Helper method to fetch data from the web
    loadData () {
        if (this.props.match.params.id) {
            //Only GET if no loaded post or loaded post and id's are different
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }    
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Select a Post</p>;
        //Give time for the post to be retrieved
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        //Check to see if a post is selected
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;