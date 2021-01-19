import React, { useState, useEffect } from 'react';
import Player from './player/Player';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const Youtube = () => {

    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&maxResults=10&playlistId=PLlKKPNsyXjdbSlbkMK_Gl9WsczNh-1Pla&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=> {
            // console.log('data', data)
            const result = data.items.map(item => {
                return {
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    vid: item.contentDetails.videoId
                }
            })
            const bestResult = result.reverse();
            setVideos(bestResult)
        })
    }, [])

    return(
        <div>
            <ul>{
                videos.map((item) => {
                    return <li key={item.vid}>
                                <Player 
                                    title={item.title}
                                    desc={item.desc}
                                    video={item.vid} />
                            </li>
                })
                }
            </ul>
        </div>
    )
};

export default Youtube;