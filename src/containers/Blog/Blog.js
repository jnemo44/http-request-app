import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/' 
                                exact
                                //You can change the css class when active
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'red',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
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
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    {/*This is a flexible param and needs to go last*/}
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>

                
                
            </div>
        );
    }
}

export default Blog;