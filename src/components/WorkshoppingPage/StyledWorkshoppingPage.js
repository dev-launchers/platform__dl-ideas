import styled from 'styled-components';


export const PageBackground = styled.div`
background-color: #444D58;
box-sizing: border-box;
padding: 25px;
min-height: 100vh;
width: 100vw;
display: flex;
align-items: top;
justify-content: center;
flex-wrap: wrap;
  `;

// export const MainContent = styled.div`
// width: 70%;
//   `;
  



export const FormWrap = styled.div`
display: flex;
padding: 15px;
flex-wrap: wrap;
justify-content: flex-end;
input {
  height: 80px;
  padding-left: 10px;
  border: 1px solid #c1c1c1;
  background-color: #C3C0C0;
  margin-right: 10px;
  border-radius: 25px;
  width: 85%;
  float: right;
};
button {
  margin-top: 10px;
  padding: 8px 30px;
  color: black;
  font-weight: bold;
  border-radius: 25px;
  border: 1px solid #999;
  background-color: #C3C0C0;
  float: right;
}

  `;


  export const Comments = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  height: 300px;
  background-color: #C3C0C0;
  border-radius: 30px;
    `;






    export const IdeaDescription = styled.div`
    background-color: #89969F;
    width: 100%;
    height: 50%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-left: 20px;
      `;
    
    
    
    
    export const WorkshopCircule = styled.div`
    height: 20px ;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    
    color: white;
    font-size: 9px;
      `;
      
      
    export const WorkshopCompleted = styled.div`
    background-color: #322E2E;
    height: 16px;
    width: 16px;
    border-radius: 50px;
    position: relative;
    left: 2px;
    top: 2px;
    margin-bottom: -40px;
      `;
        
        
    
    export const WorkshopProgressBar = styled.div`
    background-color: white;
    height: 7.35px;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
      `;
        
    
    
    export const IdeaProgress = styled.div`
    background-color: #30363E;
    width: 100%;
    height: 50%;
    padding-top: 30px;
    color: white;
      `;
    
    
    
    export const IdeaName = styled.div`
    background-color: #30363E;
    width: 100%;
    height: 50%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-left: 20px;
    color: white;
      `;
    
    export const Idea = styled.div`
    width: 100%;
    max-width: 700px;
    
    height: 30vh;
    border-radius: 30px;
    text-align: left;
    h2{
      padding-top: 10px;
      margin-bottom: 5px;
    };
    h4 {
      padding-top: 10px;
      margin-bottom: 5px;
    }
      `;
    
    
       


