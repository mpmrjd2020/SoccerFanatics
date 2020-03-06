# App Component 
### State

* League ID or Name to render on sidebar and Nav
* Main page true/flase
* (hide shows – team listing button)

### API Call - Input Files - Props
* SoccerLeagues.JSON
* [Individual League Info api](https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4334)
* [League Teams Listing Info api](https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French%20Ligue%201)

* (strLogo to be passed to teams)

### App Info Header

### App Info Component


# Sidebar Navigation Component

### League Button

* strBadge
* strDescriptionEN
* strLeague
* strCountry

# League Page Info

### Header Banner Component

* strBanner -- For league 

### League Details Component

* strPoster
* strDescriptionEN. – League description
* strWebsite
* strYoutube

### League Team Listing Badge Component

* strTeamBadge
* strTeam
* strLeague



# Team Info

### Header

* strTeamBanner


### Team Info Description
(Pass down league info. strLogo)
strTeamLogo
strDescriptionEN
strWebsite
strTeamJersey

### Stadium Component
strStadiumThumb
strStadium
strStadiumDescription

### Team Fan Page Component
strTeamFanart1
strTeamFanart2
strTeamFanart3
strTeamFanart4
