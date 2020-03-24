import React, { useState, useEffect } from 'react';
import { getStoryIds, getBestStories } from '../services/hackerNews';
import { Story } from '../components/Story';
import './StoriesContainer.css'

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([])
  const [bestStoryIds, setBestStoryIds] = useState([])
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, [])

  useEffect(() => {
    getBestStories().then(data => setBestStoryIds(data))
  }, [])

  return (
    <>
        <h1 className="naslov">Best Stories</h1>
      <div id="topDiv">
        <Story storyId={bestStoryIds[selected]} key={bestStoryIds[selected]} />
        <button className='dugmence' onClick={() => setSelected(selected + 1)}>Next Story</button>
      </div>
      <hr/>
        <h1 className="naslov">Recent Stories</h1>
      <div id="container">
        {storyIds.slice(0, 20).map(storyId => <Story storyId={storyId} key={storyId} />)}
      </div>
    </>
  )
}