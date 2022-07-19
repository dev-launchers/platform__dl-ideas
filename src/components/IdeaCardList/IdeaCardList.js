import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import IdeaCard from '../IdeaCard/IdeaCard'
import { CardListBackground, CardsWrapper } from './StyledIdeaCardList'
import axios from "axios";
import { env } from "../../utils/EnvironmentVariables";


function IdeaCardList() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    axios.get(`${env().API_URL}/idea-cards`,  
      {
        withCredentials: true,
      }
    )
      .then(response => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setLoading(false)
        setCards(getCards);
      });
  }, []);


  return (
      <CardListBackground>
          <CardsWrapper>
            {cards.map((item) => {
              return <IdeaCard key={item.id} cards={item} setSelectedCard={setSelectedCard} />
            })}
          </CardsWrapper>
            {loading === true ? 
              <CircularIndeterminateLoader 
                text="Loading..."
                color="white"
              />
              : 
              ""
            }
        </CardListBackground>
  )
}

export default IdeaCardList
