import React, { Component } from 'react'

class AppHome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to soccer fanatics!</h1>
                <p>This is a great resource to find information about the following European soccer leagues:</p>
                <ul>
                    <li>English Premier League</li>
                    <li>German Bundesliga</li>
                    <li>Italian Serie A</li>
                    <li>French Ligue 1</li>
                    <li>Spanish La Liga</li>
                    <li>Greek Superleague Greece</li>
                    <li>Dutch Eredivisie</li>
                    <li>Belgian Jupiler League</li>
                    <li>Turkish Super Lig</li>
                    <li>Danish Superliga</li>
                    <li>Portuguese Primeira Liga</li>
                </ul>
                <p>Just press the logo of the league on the sidebar and enjoy your soccer adventure.</p>
            </div>
        )

    }

}

export default AppHome