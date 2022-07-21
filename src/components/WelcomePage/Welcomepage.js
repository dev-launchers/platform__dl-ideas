import React, { useState } from 'react';
import render from 'dom-serializer';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import SubmitIdeaForm from '../SubmiteIdeaForm/SubmitIdeaForm'
import submitButtonImage from "../../images/submit-image.png";
import helpButtonImage from "../../images/help-image.png";
import {
  Wrapper,
  Headline,
  Button,
  Description,
  ButtonArea,
  StyledLink
} from './StyledWelcomePage';





export default function WelcomePage() {
  const [selected, setSelected] = useState('');

  const handleClick = (e, n) => {
    setSelected(n)
  }

  if (selected === '') {
    return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div id="welcomeWrapper">
          <h1 style={{width:"100%",textAlign:"center"}}>
            Dev Ideas
          </h1>
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
          </div>
        </Grid>
      </Grid>
    );
  }

  if (selected === 'PSI') {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div id="welcomeWrapper">
            <h1 style={{width:"100%",textAlign:"center"}}>
              Dev Ideas
            </h1>
              <SubmitIdeaForm/>
          </div>
        </Grid>
      </Grid>
      )
    }
}