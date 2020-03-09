import React from 'react'
import { Link } from 'react-router-dom'

function LeagueSidebar(props) {

    let leagueIcons = []

    leagueIcons = props.leagueInfo.map((leagueData, i, arr) => {

             return (
            <div className='League-icons' key={leagueData.idLeague}>
                <Link to={'/TeamInfo/' + leagueData.strLeague}><img src={leagueData.strBadge} alt={leagueData.strLeague} className='Li-image-data'/></Link>
                <div id='Li-league'>{arr[i].strLeague}</div> 
                <div id='Li-country'>{leagueData.strCountry}</div>
            </div>             
            )}
        )

        return (
            <div>
                <h1 id='Sidebar-label'>Soccer Leagues</h1>
                {leagueIcons}
            </div>
        )

    
}

export default LeagueSidebar