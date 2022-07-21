

import {
  IdeaDescription,
  WorkshopCircule,
  WorkshopCompleted,
  WorkshopProgressBar,
  IdeaProgress,
  IdeaName,
  Idea,
} from './StyledIdeaOverview';


function IdeaOverview(props) {

  const {selectedCard, ...other} = props;


  return (
    
    <Idea>
      <IdeaName>
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
        <IdeaProgress>
          <WorkshopProgressBar>
            <WorkshopCircule> 
              <WorkshopCompleted />  
                <p>Idea Form</p>
            </WorkshopCircule>
            <WorkshopCircule> 
              <WorkshopCompleted />
                <p>Review</p>
            </WorkshopCircule>
            <WorkshopCircule> 
              <WorkshopCompleted />
                <p>Workshopping</p>
            </WorkshopCircule>
            <WorkshopCircule> 
              <WorkshopCompleted />
                <p>Recruitment</p>
            </WorkshopCircule>
            <WorkshopCircule> 
              <WorkshopCompleted />
                <p>Project</p>
            </WorkshopCircule>
          
          </WorkshopProgressBar>
        </IdeaProgress>
      </IdeaName>
      <IdeaDescription>
        <h4>Description</h4>
        <p>{props.selectedCard.description}</p>
      </IdeaDescription>
    </Idea>
  )
}

export default IdeaOverview;