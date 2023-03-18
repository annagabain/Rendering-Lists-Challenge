import React, { Component } from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json";


export class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>{
                    savedPosts.map(post => {
                        return <div className={css.SearchItem} key={post.title}>
                            <h2>{post.title}</h2>
                            <h3>{post.name}</h3>
                            <img src={post.image}/>
                            <p>{post.description}</p>
                            </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Content