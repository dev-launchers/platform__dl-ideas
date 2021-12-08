
import './test.css';

function Idea(props) {

  return (
    <div className="idea">
      <div className="idea_name">
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
      </div>
      <div className="description">
        <h4>{props.selectedCard.description}</h4>
      </div>
    </div>
  )
}

export default Idea;