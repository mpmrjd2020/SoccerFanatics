import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import SoccerLeagues from '../../SoccerLeagues';
import LeagueSidebar from '../Leagues/LeagueSidebar';
import Home from '../../Home';
import AppBanner from '../../AppBanner';
import TeamInfo from '../Teams/TeamInfo';
import LeagueBanner from '../Leagues/LeagueBanner'

class App extends Component{
  constructor(props){
    super()

    this.state = {
      competitionsList: SoccerLeagues.leagues,
      leaguesData: [],
      leaguesTeamList: []
    
    }

    this.setTeam = this.setTeam.bind(this)
    // this.getTeamInfo = this.getTeamInfo.bind(this)
    // this.getTeamInfoData = this.getTeamInfoData.bind(this)

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
        // console.log('response', response)
        // this.state.leaguesData.push(response.data.leagues[0])
        // this.setState({leaguesData: response.data.leagues});
          this.setState({leaguesData: [...this.state.leaguesData, response.data.leagues[0]]})
        //  console.log('Array of leagues', this.state.leaguesData)
      })
    .catch(error => {
      console.log(error)
    })
  }

  setTeam(teamName) {
    this.setState({ leaguesTeamList: teamName })
  }

  // getTeamInfo() {
  //   this.state.competitionsList.map(leagueNm => {
  //     return (
  //             this.getTeamInfoData(leagueNm.strLeague)
  //     )
  //   })
  // }

  // getTeamInfoData(leagueName) {
  //   axios({
  //     method: 'get',
  //     url: `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueName}`,
  //     headers: { 'Accept': 'application/json' }
  //   })
  //   .then(
  //     response => {
  //       this.state.leaguesTeamList.push(response.data.teams)
  //       // console.log('response', response)
  //       // console.log('Array of teams', this.state.leaguesTeamList)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  componentDidMount() {
    this.getLeagueInfo()
    // this.getTeamInfo()
  }

  render() {
    // console.log('Competition listing', this.state.competitionsList)
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className='App-logo'><span role='img'>⚽️</span> Soccer Fanatics </h1>
            {/* <nav>
              <button>Competitions</button>
              <button>About</button>
            </nav> */}
          </Link>
          {/* <Link to="/">
            </Link> */}
        </header>
        {/* <div>
          <Route path="/"  component={AppBanner}/>
        </div> */}
        <section className='Soccer-details'>
          <main className='Display-detail-area'>
            <Route exact path="/"  component={AppBanner}/>
            <Route exact path="/" component={Home}/>
            <Route path="/TeamInfo/:leagueName" component={LeagueBanner}/>
            {/* <Route path='/TeamInfo/:leagueName' component={TeamInfo} /> */}
            <Route path="/TeamInfo/:leagueName" render={routerProps => <TeamInfo setTeam={this.setTeam} {...routerProps} {...this.state}/>} />
          </main>
          <div className='League-sidebar'>
            League sidebar
            <LeagueSidebar leagueInfo={this.state.leaguesData} competitionInfo={this.state.competitionsList}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
