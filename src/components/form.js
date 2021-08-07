import React from 'react';

export default function Form(){
 return (
     <div id="formWrapper">
         <h1>Submit your idea!!!</h1>
         <form id="survey-form">
             <label for="idea-entry">What project idea?</label>
             <br></br>
             <input id="idea-entry" required type="text"></input>
             <br></br>
             <label for="target-audience">Who's is the target audience for your idea?</label>
             <br></br>
             <input id="target-audience" required type="text"></input>
             <br></br>
             <label for="notes">Notes</label>
             <br></br>
             <input id="notes" type="text"></input>
             <br></br>
             <label for="tags">Tags</label>
             <br></br>
             <input id="tags" type="text"></input>
             <br></br>
             <button id="submit-btn" type="submit">Submit</button>
         </form>
     </div>
 )
}