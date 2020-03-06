import React from 'react'
import { render } from '@testing-library/react'

function LeagueSidebar(props) {

    console.log('league Hi g', props.leagueInfo)
    let leagueIcons = []
    // LeagueSidebar.defaultProps = {
    //     leagueInfo: props.leagueInfo
    // }


    
    leagueIcons = props.leagueInfo.map((leagueData, i, arr) => {
             return (
            <div className='League-icons' key={leagueData.idLeague}>
                <img src={leagueData.strBadge} className='Image-data'/>
                <div id='Li-league'>{arr[i].strLeague}</div> 
                <div id='Li-country'>{leagueData.strCountry}</div>
            </div>             
            )}
        )
       console.log('leagueIcons', leagueIcons)
        return (
            <div>
                Hello
                {leagueIcons}
            </div>
            )

    
}

export default LeagueSidebar