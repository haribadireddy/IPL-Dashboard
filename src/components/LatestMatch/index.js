// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latestMatch-container">
      <div className="team-details-container">
        <h1 className="heading">{competingTeam}</h1>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo-image"
      />
      <div className="match-details-container">
        <p className="team-lines">First Innings</p>
        <p className="team-lines">{firstInnings}</p>
        <p className="team-lines">Second Innings</p>
        <p className="team-lines">{secondInnings}</p>
        <p className="team-lines">Man Of The Match</p>
        <p className="team-lines">{manOfTheMatch}</p>
        <p className="team-lines">Umpires</p>
        <p className="team-lines">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
