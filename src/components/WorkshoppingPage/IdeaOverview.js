
import './comments.css';
import {
  Idea,
  IdeaName,
  IdeaProgress,
  WorkshopProgressBar,
  WorkshopCircule,
  WorkshopCompleted,
  Description
} from './StyledComments.js';


function IdeaOverview(props) {

  const {selectedCard, ...other} = props;


  return (
    <Idea>
      <IdeaName>
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
        <IdeaProgress>
          <WorkshopProgressBar>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Idea Form</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Review</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Workshopping</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Recruitment</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Project</p></WorkshopCircule>
          </WorkshopProgressBar>
        </IdeaProgress>
      </IdeaName>
      <Description>
        <h4>Description</h4>
        <p>{props.selectedCard.description}</p>
      </Description>
    </Idea>
  )
}

export default IdeaOverview;