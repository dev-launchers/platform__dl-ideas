import axios from "axios"

import Grid from '@mui/material/Grid';


import {
  UserNameCommentBox,
  UserNameComment,
  UserComment,
  ButtonBox,
  SideButtonBox,
  FormBox
} from './StyledCommentForm';



function CommentForm(props) {

  const {selectedCard, ...other} = props;

  const handleChange = (e) => {
    props.setHandleChange(e.target.value)
  }

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange }

    axios.post(`https://api-staging.devlaunchers.org/idea-cards/${props.selectedCard.id}/comment`, data)
      .then(response => {
        
        if (response.status === 200 ) {
          props.setHandleChange('')
          props.setHandleTextChange('')
        }
      })
  }

  return (
    <FormBox>
      <form onSubmit={handleSubmit} >
      <Grid container 
        spacing={2} 
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start" 
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <UserNameCommentBox>
          <UserNameComment 
          type="text"
          name="author"
          placeholder="Your name..."
          value={props.handleChange}
          onChange={handleChange}      
          />
        </UserNameCommentBox>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <UserComment>

          <img alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} 
              style={{
                marginLeft: "20px",
                height: "60px",
                borderRadius: "50%"
              }}/>

          <input
            type="text"
            name="text"
            placeholder="What are your thoughts?"
            value={props.handleTextChange}
            onChange={handleTextChange}
          />

        </UserComment>

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ButtonBox>
            <button type="submit">Submit</button>
          </ButtonBox>
      
      
     
        </Grid>

      </Grid>



      

      </form>
    </FormBox>
  );
}

export default CommentForm;
