import React, {components} from 'react';

function ScoreBoard(props) {
    return (
      <div className="ScoreBoard">
        <div className="teamStats">
          <h3>VISITORS</h3>
          <h3>{props.visitingTeamStats.score}</h3>
        </div>
  
        <h3>SCOREBOARD</h3>
  
        <div className="teamStats">
          <h3>HOME</h3>
          <h3>{props.homeTeamStats.score}</h3>
        </div>
      </div>
    )
  }
export default ScoreBoard;  