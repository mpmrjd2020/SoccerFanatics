# SoccerFanatics

### Project Description

Website for soccer Fans to get info about their favorite soccer leagues and teams. the site will have 5 leagues and will allow the usrs to navigate to the team level and get info about the teams in a given league.

### Project Links
* [Github Soccer Fans Code Base](https://github.com/mpmrjd2020/SoccerFanatics)
* [Soccer Fanatics React App](http://foamy-mitten.surge.sh/)

### Wireframes

* [Wireframe Soccer Fans Main Screen](https://wireframe.cc/dfSiFn)
* [Wireframe Soccer Team Listing Screen](https://wireframe.cc/FH3bKo)

### React Architecture

WIP. State and props still being defined.
* [Components Architecture](https://wireframe.cc/WyubQk)


### Potential Major Problems

* New technology
    1. _New functionalities (i.e. Dropdown list...)_
    2. _Animation in React or JS in general_

    * Leverage documentation, courses and instructors

* Correct initial design

    * Refactoring

* Adhering to KIS principle

    * Planning
    * Design and Architecture before coding
    * Sticking to 6 initial components

* Defining MVP (6 components)

    * Refactoring

* API Reliability

    * Copy sample as back-up

### API Links

* [Link to soccer API!](https://www.thesportsdb.com/api.php)
* [Link to France League Page](https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=france)
* [Link to France League One](https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French%20Ligue%201)

### MVP and POST MVP

* Develop App with 6 components
* Find and use external API
* Render data on page
* Develop page layout - formating
* Develop navigation 
* Make the page interactive
* _Incorporate animation_
* _Further drill down the pages_

### Users story

* As a users I want to be able to access infos about different soccer leagues
* As a user I want to access details info about a chosen soccer league
* As a users I want the ability to navigate back to the application main page from anywhere in the application(easy and intuitive navigation)

### Component Library

* react
* react-dom
* react-router 
* react-router-dom
* WIP - Potential animation library

### Additional Libraries

* axios 

### Application Components
Component | Description
---------   -----------
App.js | Main application module with application header and application navigation
AppBanner.js | Banner displayed when application is at home page
Home.js | Application home page with infos about application
LeagueSidebar.js | Leagues listing and navigation bar
LeagueBanner.js | Whan accessing details about the a particular league, displays banner for that league
TeamInfo.js | Teams listing for a particular league

### Time Frames
Component | Time
---------   ----
App.js | 12 hrs
AppBanner.js | 1 hr
Home.js | 1 hr
LeagueSidebar.js | 8 hrs
LeagueBanner.js | 4 hrs
TeamInfo.js | 12 hrs
Design | 3.5 hrs
Proposal | 3.5 hrs
Research | 6 hrs


### Code Snippet
    <section className='Soccer-details'>
        <main className='Display-detail-area'>
            <Route exact path="/"  component={AppBanner}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <LeagueBanner {...routerProps} {...this.state}/>} />
            <Route exact path="/TeamInfo/:leagueName" render={routerProps => <TeamInfo setTeam={this.setTeam} {...routerProps} {...this.state}/>} />
        </main>
        <div className='League-sidebar'>
            <LeagueSidebar leagueInfo={this.state.leaguesData} competitionInfo={this.state.competitionsList} setLeagueBanner={this.setLeagueBanner}/>       
        </div>
    </section>  

### Issues and Resolutions

* [Issue with getting undefined when passing props & mapping thru Array](https://git.generalassemb.ly/jdr-0127/project-2/issues/5)
* [Route path parameters definition](https://git.generalassemb.ly/jdr-0127/project-2/issues/6)
* [TypeError: Cannot read property 'strBanner' of undefined LeagueBanner.render](https://git.generalassemb.ly/jdr-0127/project-2/issues/9)
* [Getting infinite loop when setting state in React componentDidUpdate](https://git.generalassemb.ly/jdr-0127/project-2/issues/12)
