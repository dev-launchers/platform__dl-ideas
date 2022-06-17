import styled from 'styled-components';



export const Wrapper = styled.div`
  background-color: #30363E;
  border-radius: 40px;
  width: 80%;
  max-width:800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Headline = styled.h3`
  font-size: 40px;
  color: #D3D4D6;
  margin-top:40px;
`;

export const Test = styled.div`
  padding: 10%;
`;

export const Button = styled.button`
  width: 100%;
  height: auto;
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


export const Description = styled.p`
  color: #F1F4F5;
`;

export const Question = styled.div`
  margin-left: 10px;

  & p {
   display: inline-block;
   color: #ffffff;
   font-size: 15px;
   text-align: left ;
   float: left;
   width: 90%;
   margin-top: 5px;
   margin-bottom: 5px;
   margin-left: 10px;
  }
  & input {
    display: inline-block;
    float: left;
    width: 70%;
    height: 30px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 20px;
  }
`;

export const Question2 = styled.div`


  & p {
   display: inline-block;
   color: #ffffff;
   font-size: 15px;
   text-align: left ;
   float: left;
   width: 90%;
   margin-top: 30px;
   margin-bottom: 5px;
   margin-left: 20px;
  }
  & input {
    display: inline-block;
    float: left;
    width: 90%;
    height: 100px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
  }
`;

export const LastQuestion = styled.div`
  clear: both;

  & p {
   display: inline-block;
   color: #ffffff;
   font-size: 20px;
   text-align: left ;
   float: right;

  }
  & input {
    display: inline-block;
    float: left;
    width: 235px;
    height: 30px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 20px;
  }
`;

export const Submit = styled.button`
  width: 130px;
	background: #C4C4C4;
	font-weight: bold;
	color: #000000;
	border: 0 none;
	border-radius: 15px;
	cursor: pointer;
	padding: 7px 5px;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-right: 20px;
  font-size:20px;
  float: right;
`;

export const Container = styled.div`
  width: 535px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const SubmitWrapper = styled.div`
  background-color: #C9CACC;
  height: 300px;
  border-radius: 30px;
  width: 80%; 
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    font-size: 30px;
    font-weight: bold;
    padding: 0 15% 0 15%; 
  }

  & button {
   width: 100px;
   margin: 0 auto;
   background: #89969F;
	 font-weight: bold;
	 color: #000000;
	 border: 0 none;
	 border-radius: 30px;
	 cursor: pointer;
	 padding: 10px 5px;
   font-size:20px;
    }
  `;