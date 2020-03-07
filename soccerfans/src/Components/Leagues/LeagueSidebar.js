import React from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'
import TeamInfo from '../Teams/TeamInfo'

function LeagueSidebar(props) {

    // console.log('league Hi g', props.leagueInfo)
    let leagueIcons = []
    // LeagueSidebar.defaultProps = {
    //     leagueInfo: props.leagueInfo
    // }

    // console.log('props.competitionInfo', props.competitionInfo)
    
    leagueIcons = props.leagueInfo.map((leagueData, i, arr) => {
             return (
            <div className='League-icons' key={leagueData.idLeague}>
                <Link to={'/TeamInfo/' + leagueData.strLeague}><img src={leagueData.strBadge} className='Image-data'/></Link>
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
            // <TeamInfo leagueName={leagueIcons} />
            )

    
}

export default LeagueSidebar