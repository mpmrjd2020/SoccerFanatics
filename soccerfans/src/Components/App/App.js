// React and API Call Components
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

// CSS file
import './App.css';

// Jason file
import SoccerLeagues from '../SoccerLeaguesData/SoccerLeagues';

// Components
import LeagueSidebar from '../Leagues/LeagueSidebar';
import Home from '../Home/Home';
import AppBanner from './AppBanner';
import TeamInfo from '../Teams/TeamInfo';
import LeagueBanner from '../Leagues/LeagueBanner';

class App extends Component{
  constructor(props){
    super()

    this.state = {
      competitionsList: SoccerLeagues.leagues,
      leaguesData: [],
      leaguesTeamList: [],

    }
    this._isMounted = false;
    this.setTeam = this.setTeam.bind(this)
  }

  getLeagueInfo() {
    this.state.competitionsList.map(league => {
      return (
              this.getLeagueInfoData(league.idLeague)
        )
    } )

  }

  getLeagueInfoData(competitionId) {
    axios({
      method: 'get',
      url: `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${competitionId}`,
      headers: {'Accept': 'application/json'}
    })
    .then(
      response => {
          this.setState({leaguesData: [...this.state.leaguesData, response.data.leagues[0]]})
      })
    .catch(error => {
      console.log(error)
    })
  }

  setTeam(teamName) {
    this.setState({ leaguesTeamList: teamName })
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getLeagueInfo()
  }

  componentWillUnmount() {
    this._isMounted = false;
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className='App-logo'><span role='img' aria-label='Soccer ball'>⚽️</span> Soccer Fanatics </h1>
          </Link>
        </header>

        <section className='Soccer-details'>
          <main className='Display-detail-area'>
            <Route exact path="/"  component={AppBanner}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <LeagueBanner {...routerProps} {...this.state}/>} />
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <TeamInfo setTeam={this.setTeam} {...routerProps} {...this.state}/>} />
          </main>
          <div className='League-sidebar'>
            <br></br>
            <br></br>
            <LeagueSidebar leagueInfo={this.state.leaguesData} competitionInfo={this.state.competitionsList} setLeagueBanner={this.setLeagueBanner}/>       
          </div>
        </section>
      </div>
    );
  }
}

export default App;
