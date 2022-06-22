import React, { useState } from 'react';
import './submitIdea.css'
import { Link } from 'react-router-dom'
import SubmitIdeaForm from '../SubmitIdea/SubmitIdeaForm'
import Grid from '@mui/material/Grid';

import submitButtonImage from "../../images/submit-image.png";
import helpButtonImage from "../../images/help-image.png";

import {
  Wrapper,
  Headline,
  Button,
  Test,
  Description,
  ButtonArea,
  StyledLink
} from './styledSubmitIdea';


function SubmitIdea() {
  const [selected, setSelected] = useState('');

  const handleClick = (e, n) => {
    setSelected(n)
  }

  if (selected === '') {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Description>
            Have an idea for a development project?<br />
            Want to help develop an idea?<br />
            Let’s get started!
          </Description>


          <ButtonArea>
            <StyledLink to="/form">
              <Button onClick={() => handleClick(1, 'PSI')}>
                <div style={{height:"20%", display:"flex", alignItems:"center"}}>
                  Submit Your Idea!
                </div>
                <img src={submitButtonImage} style={{height:"70%"}} />
              </Button>
            </StyledLink>


            <StyledLink to="/cards">
              <Button onClick={() => handleClick(2, 'Non-PSI')}>
                <div style={{height:"20%", display:"flex", alignItems:"center"}}>
                  Help Dev Launchers Members With Their Ideas!
                </div>
                <img src={helpButtonImage} style={{height:"70%"}} />
              </Button>
            </StyledLink>
          </ButtonArea>
        </Grid>
      </Grid>
    );
  }

  if (selected === 'PSI') {
    return (
      <SubmitIdeaForm/>
      )
    }

}

export default SubmitIdea;