import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import IdeaCard from '../IdeaCard/IdeaCard'
import { CardListBackground, CardsWrapper, LoaderWrapper } from './StyledPotentialProjects'
import axios from "axios";
import { env } from "../../utils/EnvironmentVariables";


function PotentialProjects() {
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

            {
            loading === true ? 
            <LoaderWrapper >
              <CircularIndeterminateLoader 
                text="Loading..."
                color="white"
              />
            </LoaderWrapper>
              : 
              ""
            }

        </CardListBackground>
  )
}

export default PotentialProjects
