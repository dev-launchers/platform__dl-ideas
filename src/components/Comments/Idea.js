
import './comments.css';

function Idea(props) {

  return (
    <div className="idea">
      <div className="idea_name">
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{props.selectedCard.description}</p>
      </div>
    </div>
  )
}

export default Idea;