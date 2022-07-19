import React from 'react'
import { Link } from 'react-router-dom';
import { Star } from "phosphor-react";

import {
  CardArea,
  IdeaHeader,
  IdeaDetails,
  IdeaType,
  IdeaPositionsAvailable,
  IdeaTimeCommitment,
  IdeaMoreDetails,
  TextCardTitleBox,
  TextCardTitle,
  TextCardTitleDescription,
  TextCardDetailLabel,
  TextCardDetailData,
  IdeaMoreDetailsButton,


} from "./StyledIdeaCard";


function IdeaCard({ cards, setSelectedCard }) {

  return (

  <CardArea>
    <IdeaHeader>
      <TextCardTitleBox>
        <TextCardTitle> 
          <Star size={22} weight="fill"/>
            {cards.ideaName}
          </TextCardTitle>
      </TextCardTitleBox>
      <TextCardTitleDescription>
        {cards.description}
      </TextCardTitleDescription>
    </IdeaHeader>
      

    <IdeaDetails>

      <IdeaType>
        <TextCardDetailLabel> 
          Type
        </TextCardDetailLabel>
        <TextCardDetailData> 
        {
          cards.skills.map((skill, index) => {
            if (index === cards.skills.length - 1) {
              return skill.skill;
            }
            return skill.skill + ' / ';
        })}
        </TextCardDetailData>
      </IdeaType>

      <IdeaPositionsAvailable>

        <TextCardDetailLabel> 
          Position Available
        </TextCardDetailLabel>

        <TextCardDetailData> 
        {cards.openPositions.map((position, index) => {
            if (index === cards.openPositions.length - 1) {
              return position.title;
            }
            return position.title + ' ';
        })}
        </TextCardDetailData>

      </IdeaPositionsAvailable>

      <IdeaTimeCommitment>
        <TextCardDetailLabel> 
          Time Commitment
        </TextCardDetailLabel>
        <TextCardDetailData> 
        {`${cards.hourCommitmentMin} - ${cards.hourCommitmentMax}`} hrs
        </TextCardDetailData>
      </IdeaTimeCommitment>
    </IdeaDetails>

    <IdeaMoreDetails>
      <IdeaMoreDetailsButton>
        <Link onClick={() => { setSelectedCard(cards) }} to={`/workshopping/${cards.id}`} >
          See More 
        </Link>
      </IdeaMoreDetailsButton>
    </IdeaMoreDetails>

  </CardArea>
  )
}

export default IdeaCard
