import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts : [],
    }

    componentDidMount () {
        axios.get('/posts')
            .then(response => {
                //Storing only 4 posts
                const posts = response.data.slice(0, 4);
                //Add data to post data from server
                const updatedPosts = posts.map(post => {
                    //Return JS Object and add author to post data
                    return {
                        ...post,
                        author: 'Joey Poey'
                    }
                });
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error)
        {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post  
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    </Link>);
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts;



