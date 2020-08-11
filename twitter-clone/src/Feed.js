import React from 'react';
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            
        {/* Header */}
            <div className="feed__header">
            <h5>Home</h5>
            </div>

        {/* TweetBox */}
        <TweetBox/>


        {/* post */}
        <Post/>
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}

        </div>
    )
}

export default Feed
