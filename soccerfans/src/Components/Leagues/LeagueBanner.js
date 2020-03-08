import React from 'react'

function LeagueBanner(props) {
    console.log('leaguebanner', props.leaguesData)

    return(
        <div className='Banner-area'>
            <img src={props.leaguesData[0].strBanner} className='LeagueBanner'/>
        </div>

    )
}

export default LeagueBanner