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
  Description
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

          <div style={{
            width:"100%",
            height:"50vh",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"flex-start"
          }}>
            <Link to="/form" style={{width:"40%",height: "100%"}}>
              <Button style={{width:"100%",height: "100%"}} onClick={() => handleClick(1, 'PSI')}>
                <div style={{height:"20%"}}>
                  Submit Your Idea!
                </div>
                <img src={submitButtonImage} style={{height:"70%"}} />
              </Button>
            </Link>


            <Link to="/cards" style={{width:"40%", height: "100%"}}>
              <Button style={{width:"100%",height: "100%"}} onClick={() => handleClick(2, 'Non-PSI')}>
                <div style={{height:"20%"}}>
                  Help Dev Launchers Members With Their Ideas!
                </div>
                <img src={helpButtonImage} style={{height:"70%"}} />
              </Button>
            </Link>
          </div>
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