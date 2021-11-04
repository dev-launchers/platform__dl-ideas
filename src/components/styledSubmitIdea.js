import styled from 'styled-components';



export const Wrapper = styled.div`
  background-color: #30363E;
  border-radius: 40px;
  max-width: 80%;
  height: 400px;
  margin: 0 auto;
`;

export const Headline = styled.h3`
  font-size: 40px;
  color: #D3D4D6;
`;

export const Test = styled.div`
  padding: 116px;
`;

export const Button = styled.button`
  width: 200px;
	background: #C4C4C4;
	font-weight: bold;
	color: #000000;
	border: 0 none;
	border-radius: 30px;
	cursor: pointer;
	padding: 30px 5px;
  margin: 10px 5px;
  font-size:20px;
`;

export const Question = styled.div`
  width: 535px;
  clear: both;
  margin: 0 auto;

  & p {
   display: inline-block;
   color: #ffffff;
   font-size: 20px;
   text-align: left ;
   float: left;

  }
  & input {
    display: inline-block;
    float: right;
    width: 235px;
    height: 30px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 20px;
  }
`; 