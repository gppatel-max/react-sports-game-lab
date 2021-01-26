import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Team from '../Team/Team';

class Game extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        resetCount: 0,
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }
  
      this.shotSound = new Audio('./assets/audio/smb_fireball.wav')
      this.scoreSound = new Audio('./assets/audio/smb_1-up.wav')
    }
  
    shoot = (team) => {
      const teamStatsKey = `${team}TeamStats`
      let score = this.state[teamStatsKey].score
      this.shotSound.play()
  
      if (Math.random() > 0.5) {
        score += 1
  
        setTimeout(() => {
          this.scoreSound.play()
        }, 100)
      }
  
      this.setState((state, props) => ({
        [teamStatsKey] : {
          shots: state[teamStatsKey].shots + 1,
          score
        }
      }))
    }
  
    resetGame = () => {
      this.setState((state, props) => ({
        resetCount: state.resetCount + 1,
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }))
    }
  
    render() {
      return (
        <div className="Game">
          <ScoreBoard
            visitingTeamStats={this.state.visitingTeamStats}
            homeTeamStats={this.state.homeTeamStats}
          />
  
          <h1>Welcome to {this.props.venue}</h1>
          <div className="stats">
            <Team
              name={this.props.visitingTeam.name}
              logo={this.props.visitingTeam.logoSrc}
              stats={this.state.visitingTeamStats}
              shotHandler={() => this.shoot('visiting')}
            />
  
            <div className="versus">
              <h1>VS</h1>
              <div>
                <strong>Resets:</strong> {this.state.resetCount}
                <button onClick={this.resetGame}>Reset Game</button>
              </div>
            </div>
  
            <Team
              name={this.props.homeTeam.name}
              logo={this.props.homeTeam.logoSrc}
              stats={this.state.homeTeamStats}
              shotHandler={() => this.shoot('home')}
            />
          </div>
        </div>
      )
    }
  }
  export default Game