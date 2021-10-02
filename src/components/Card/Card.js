import React from 'react'
import CardWrapper from './CardWrapper/StyledCardWrapper';
import Tab from './Tab/StyledTab';
import TabText from './TabText/StyledTabText'
import StarIcon from './StarIcon/StyledStarIcon';
import AddIconLight from './AddIconLight/StyledAddIconLight';
import HeaderCard from './HeaderCard/StyledHeaderCard';
import HeaderContent from './HeaderContent/StyledHeaderContent';
import HeaderTitle from './HeaderTitle/StyledHeaderTitle';
import HeaderDescription from './HeaderDescription/StyledHeaderDescription';
import FooterCard from './FooterCard/StyledFooterCard';
import FooterLink from './FooterLink/StyledFooterLink';
import MainCard from './MainCard/StyledMainCard';
import MainList from './MainList/StyledMainList';
import MainCell from './MainCell/StyledMainCell';
import MainCellBorders from './MainCellBorders/StyledMainCellBorders';
import CellTitle from './CellTitle/StyledCellTitle';
import CellText from './CellText/StyledCellText';

function Card({ cards }) {

  return (
    <CardWrapper>
      <AddIconLight />
      <Tab>
        <StarIcon />
        <TabText>Most Recent</TabText>
      </Tab>
      <HeaderCard>
        <HeaderContent>
          <HeaderTitle>{cards.project}</HeaderTitle>
          <HeaderDescription>{cards.description}</HeaderDescription>
        </HeaderContent>
      </HeaderCard>
      <MainCard>
        <MainList>
          <MainCell>
            <CellTitle>Project Type</CellTitle>
            <CellText>{cards.type}</CellText>
          </MainCell>
          <MainCellBorders>
            <CellTitle>Positions Available</CellTitle>
            <CellText>{cards.positions}</CellText>
          </MainCellBorders>
          <MainCell>
            <CellTitle>Time Commitment</CellTitle>
            <CellText>{cards.time}</CellText>
          </MainCell>
        </MainList>
      </MainCard>
      <FooterCard>
        <FooterLink>See More &#62;</FooterLink>
      </FooterCard>
    </CardWrapper>
  )
}

export default Card
