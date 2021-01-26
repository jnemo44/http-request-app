import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/posts/' 
                                exact
                                //You can change the css class when active
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'red',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                //Relative Path
                                //pathname: this.props.match.url + '/new-post',
                                //Absolute Path
                                pathname: '/new-post',
                                hash: '#submit', //Not implemented
                                search: '?quick-submit=true' //Not implemented
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*Switch allows only one route to load */}
                <Switch>
                    {/*This is a guard */}
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    {/*A way to handle 404 error, it is a catch all*/}
                    <Route render={() => <h1>Not found</h1>}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>

                
                
            </div>
        );
    }
}

export default Blog;