// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} =
    matchCardDetails

  const resultStatus = matchStatus === 'Won' ? 'won-css' : 'lost-css'

  return (
    <li className="card_list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo-image"
      />
      <h1 className="card-heading">{competingTeam}</h1>
      <p className="match-status">{result}</p>
      <p className="status">{resultStatus}</p>
    </li>
  )
}

export default MatchCard
