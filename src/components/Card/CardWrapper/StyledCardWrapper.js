import styled from "styled-components";

const CardWrapper = styled.li`
  /* width: 568px; */
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 42px 50px 0;
  outline: 0.3rem ${({ theme }) => theme.colors.NEUTRAL_1} solid;
  border-radius: 2rem;
  background-color: white;
  overflow: hidden;
`;

export default CardWrapper;
