import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackerNews'
import { mapTimeString } from '../utils/mapTimeString'
import './Story.css'

export const Story = ({storyId}) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // Lazy eval
    },[])

    return (
        <>
        <div id="story">
        <a href={story.url} target="_blank" rel="noopener noreferrer" >
            <h3>{story.title}</h3>
        </a>
        <p>{story.by}</p>
        <p>{mapTimeString(story.time)}</p>
        </div>
        </>
    )
}