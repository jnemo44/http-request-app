import React from 'react';
// This allows route props to be passed from one component 
// to a sub component
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
    
    };

export default withRouter(post);