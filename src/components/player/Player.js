import React from 'react';
import Linkify from 'react-linkify';
import './Player.css'

const Player = (props) => {

    //fetch description from Youtube video
    let textForm = props.desc;

    return(
        <div className='pageLayout'>
            <h2>{props.title}</h2>
                <div className='video-container'>
                    <iframe title='Hello' width='853' height='480' src={`//www.youtube.com/embed/${props.video}?rel=0`} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className='description'>
                    <Linkify properties={{ target: '_blank' }}>
                        {textForm.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}
                    </Linkify>
                </div>
                
        </div>
        
    )
};

export default Player;