import styled, { css } from "styled-components";

export const CardArea = styled.div`
margin: 0.5%;
width: 90%;
min-height: 300px;
max-width:580px;
background-color: #C4C4C4;
border-radius: 40px;
/* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
display: flex;
flex-direction: column;
align-items:center;
align-content:center;
`;


export const IdeaHeader = styled.div`
  width: 100%;
  min-height: 120px;
  max-width: 580px;
  background-color: #59687B;
  border-radius: 40px;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  padding: 1rem;
`;


export const TextCardTitleBox = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center; 
`;

export const TextCardTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 42px;
  text-align: center;
  color: #FFFFFF;
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;

`;

export const TextCardTitleDescription = styled.p`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
  @media screen and (max-width: 600px) {
    font-size: 1.0rem;
`;


export const IdeaDetails = styled.div`
  width: 100%;
  min-height: 120px;
  max-width: 580px;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items:top;
  justify-content:center;
  padding: 10px
`;



export const IdeaType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
  border-right: 1px solid rgba(69, 77, 88, 0.58);
  padding: 0.5rem;
  align-items: center;
`;

export const IdeaPositionsAvailable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding: 0.5rem;
  align-items: center;
`;

export const IdeaTimeCommitment = styled.div`
  width: 25%;
  border-left: 1px solid rgba(69, 77, 88, 0.58);
  padding: 0.5rem;
  align-items:top;
`;


export const TextCardDetailLabel = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
}
`;


export const TextCardDetailData = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
}
`;

export const IdeaMoreDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.5rem
`;

export const IdeaMoreDetailsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: rgba(84, 87, 91, 0.2);
  border-radius: 20px;
  padding: 0.8rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 15px;
  /* or 107% */
  text-align: center;
  letter-spacing: 0.216667px;
  color: #30363E;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
`;

