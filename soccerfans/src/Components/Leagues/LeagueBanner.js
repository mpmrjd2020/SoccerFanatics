import React, { Component } from 'react'

class LeagueBanner extends Component {
    constructor(props) {
        super(props)
    }

 
    render() {
        let propsLeague = []

        propsLeague = this.props.match.params.leagueName

        

        console.log('this.props.match.params.leagueName', this.props.match.params.leagueName)
        console.log('leaguebanner', this.props.leaguesData)
        // console.log('leaguebanner this props', this.props.leaguesData)
        let displayLeagueBanner = this.props.leaguesData.find((bannerLeague) => {
            return bannerLeague.strLeague === propsLeague
        }
        ) 
        // if (displayLeagueBanner.strBanner != null || displayLeagueBanner.strBanner === null ) {
        //     //  console.log('lg Banner',leagueData.strBanner)
        //     let Banner = displayLeagueBanner.strBanner
        //     // console.log(props)
        //  } else {
        //     let Banner = displayLeagueBanner.strBadge
        //  }

        console.log('displayLeagueBanner', displayLeagueBanner.strBanner)

    
        return(
            <div className='Banner-area'>
                1
                {/* <img src={this.props.leaguesData[0].strBanner} className='LeagueBanner'/> */}
                {/* <img src={displayLeagueBanner.strBanner} className='LeagueBanner'/> */}
            </div>

        )
    }
}

export default LeagueBanner