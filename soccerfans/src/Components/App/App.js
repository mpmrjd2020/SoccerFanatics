import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import SoccerLeagues from '../../SoccerLeagues';
import LeagueSidebar from '../Leagues/LeagueSidebar';
import Home from '../../Home';
import AppBanner from './AppBanner';
import TeamInfo from '../Teams/TeamInfo';
import LeagueBanner from '../Leagues/LeagueBanner';
import TeamDetails from '../Teams/TeamDetails';

class App extends Component{
  constructor(props){
    super()

    this.state = {
      competitionsList: SoccerLeagues.leagues,
      leaguesData: [],
      leaguesTeamList: [],
      leagueBanner: ' 1'

    }
    this._isMounted = false;
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

  setLeagueBanner(leagueBanderole) {
    
    this._isMounted && this.setState({ leagueBanner: leagueBanderole })
    // console.log('I am in set league banner', leagueBanderole)
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
    this._isMounted = true;
    this._isMounted && this.getLeagueInfo()
    // this.getTeamInfo()
  }

  componentWillUnmount() {
    this._isMounted = false;
 }

  render() {
    // console.log('Competition listing', this.state.competitionsList)
    // console.log('this.state.leagueBanner', this.state.leagueBanner)
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
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <LeagueBanner {...routerProps} {...this.state}/>} />
            {/* <Route path='/TeamInfo/:leagueName' component={TeamInfo} /> */}
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <TeamInfo setTeam={this.setTeam} {...routerProps} {...this.state}/>} />
            <Route exact path="/TeamDetails/:teamName" render={routerProps => <TeamDetails {...routerProps} {...this.state}/>} />
          </main>
          <div className='League-sidebar'>
            League sidebar
            <LeagueSidebar leagueInfo={this.state.leaguesData} competitionInfo={this.state.competitionsList} setLeagueBanner={this.setLeagueBanner}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
