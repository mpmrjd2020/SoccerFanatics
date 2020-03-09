import React, { Component } from 'react';
import axios from 'axios';

const sportDBURL='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l='

class TeamInfo extends Component {
    constructor(props) {
        super()

    }

    
    teamMountCall() {
        const  leagueParameter = this.props.match.params.leagueName

        axios({
            method: 'get',
            url: `${sportDBURL}${leagueParameter}`,
            headers: { 'Accept': 'application/json' }
            })
            .then(
            response => {
                let currentTeam = response.data.teams
                this.props.setTeam(currentTeam)
                
            })
            .catch(error => {
                console.log(error)
            })
        }
    
    teamUpdateCall(prevProps) {
        const  leagueParameter = this.props.match.params.leagueName

        axios({
            method: 'get',
            url: `${sportDBURL}${leagueParameter}`,
            headers: { 'Accept': 'application/json' }
            })
            .then(
            response => {
                let currentTeam = response.data.teams
                if ((prevProps.match.params.leagueName !== leagueParameter)) {
                    this.props.setTeam(currentTeam)
                }
                
            })
            .catch(error => {
                console.log(error)
            })
        }

    componentDidMount() {
        this.teamMountCall()
    }

    componentDidUpdate(prevProps) {
        this.teamUpdateCall(prevProps)
    }

    render() {
        let teamIcon = []
        teamIcon = this.props.leaguesTeamList.map((teamNm) => {
            return (
                <div className='Teams-icons' key={teamNm.idTeam}>
                    <img src={teamNm.strTeamBadge} alt={teamNm.strTeam} className='Team-image-data'/>
                    <div id='Ti-team'>{teamNm.strTeam}</div> 
                    <div id='Ti-country'>{teamNm.strLeague}</div>
                </div>
            )
        } )

        return(
            <div className='Team-container'>
            {teamIcon}
            </div>
        )
    }
}

export default TeamInfo