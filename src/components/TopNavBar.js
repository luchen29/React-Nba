import React from 'react'
import nbaLogo from '../assets/images/nba-logoman-word-white.svg'

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={nbaLogo} alt="nba" className="App-logo"/>
            </header>
        )
    }
}
