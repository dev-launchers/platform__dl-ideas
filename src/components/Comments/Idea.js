
import './comments.css';

function Idea(props) {

  return (
    <div className="idea">
      <div className="idea_name">
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
        <div className="test">
          <div className="progress_bar">
            <div className="circule"><div className="completed"></div><p>Idea Form</p></div>
            <div className="circule"><div className="completed"></div><p>Review</p></div>
            <div className="circule"><div className="completed"></div><p>Workshopping</p></div>
            <div className="circule"><div className="incomplete"></div><p>Recruitment</p></div>
            <div className="circule"><div className="incomplete"></div><p>Project</p></div>
          </div>
        </div>
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{props.selectedCard.description}</p>
      </div>
    </div>
  )
}

export default Idea;