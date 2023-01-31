import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            {/*<Link to={id.toString()} state={{...post}}>PostsDetails</Link>*/}
            <button onClick={()=>navigate(id.toString(),{state:post})}>details</button>
        </div>
    );
};

export default Post;