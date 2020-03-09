import React, { Component } from 'react'

// Define it as class but could use function

class LeagueBanner extends Component {
 
    render() {
        let propsLeague = []
        propsLeague = this.props.match.params.leagueName
     
        let displayLeagueBanner = this.props && this.props.leaguesData.find((bannerLeague) => {
            return bannerLeague.strLeague === propsLeague
        }
        ) 

        return(
            <div className='Banner-area'>
                <img src={displayLeagueBanner && displayLeagueBanner.strBanner} alt='League banner' className='LeagueBanner'/>
            </div>

        )
    }
}

export default LeagueBanner