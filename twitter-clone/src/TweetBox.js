import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1126476975621726208/w8Gz9vsu_bigger.jpg'/>
                    <input placeholder="'what's happening" type="text"/>
                </div>
                    <input className="tweetBox__inputImage" placeholder="Enter image URL" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
