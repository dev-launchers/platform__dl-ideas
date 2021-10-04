import styled from "styled-components";

const CardWrapper = styled.li`
  width: 568px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 42px 0 0;

  :last-of-type {
    margin: 0;
  }
`;

export default CardWrapper;