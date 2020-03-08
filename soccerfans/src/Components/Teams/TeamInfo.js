import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const sportDBURL='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l='
console.log('I am in teaminfo 1')

class TeamInfo extends Component {
    constructor(props) {
        super()

    }

    
    componentDidUpdate() {
        // console.log('I am in Team Info 2)', this)
        // console.log('I am in Team Info 2)',this.props.match.params.leagueName)
        const  leagueParameter = this.props.match.params.leagueName

        console.log('this.props.match.params.leagueName',this.props.match.params.leagueName)

        axios({
            method: 'get',
            url: `${sportDBURL}${leagueParameter}`,
            headers: { 'Accept': 'application/json' }
            })
            .then(
            response => {
                let currentTeam = response.data.teams
                console.log('IAM IN RESPONSE')
                // console.log('response', response)
                // console.log('Array of teams', this.state.leaguesTeamList)
                //    console.log('currentteam',currentTeam)
                this.props.setTeam(currentTeam)
                // console.log('print set team', this.props.setTeam)
            })
            .catch(error => {
                console.log(error)
            })
         
       
    }

    render() {
        console.log('this.props.leaguesTeamList.',this.props)
        let teamIcon = ['France', 'Italy']
        teamIcon = this.props.leaguesTeamList.map((teamNm) => {
            return (
                <div className='Teams-icons' key={teamNm.idTeam}>
                    {/* <Link to={'/TeamInfo/' + leagueData.strLeague}><img src={leagueData.strBadge} className='Image-data'/></Link> */}
                    <Link to={'/TeamInfo/' + teamNm.strTeam}><img src={teamNm.strTeamBadge} className='Team-image-data'/></Link>
                    <div id='Li-league'>{teamNm.strTeam}</div> 
                </div>
            )
        } )
        // console.log(this.props)
        // console.log('I am in teanInfo',teamIcon)
        return(
            <div>
            1
            {teamIcon}
            </div>
        )
    }
}

export default TeamInfo