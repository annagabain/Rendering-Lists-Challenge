import React from 'react'
import css from "./css/PostItem.module.css";

function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            return <div className={css.SearchItem} key={post.title}>
                <h2>{post.title}</h2>
                <h3>{post.name}</h3>
                <img src={post.image} alt="some theme"/>
                <p>{post.description}</p>
            </div>
        })
    )
}

export default PostItem