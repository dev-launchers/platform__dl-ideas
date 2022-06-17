import React, { useState } from 'react';
import './submitIdea.css'
import { Link } from 'react-router-dom'
import SubmitIdeaForm from '../SubmitIdea/SubmitIdeaForm'
import Grid from '@mui/material/Grid';



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
          <Wrapper>
            <Test>
              <Headline>Dev Ideas</Headline>
              <Description>
                Have an idea for a development project?<br />
                Want to help develop an idea?<br />
                Let’s get started!
              </Description>


              <Link to="/form" >
                <Button onClick={() => handleClick(1, 'PSI')}>Solving a Problem</Button>
              </Link>




              <Link to="/cards">
                <Button onClick={() => handleClick(2, 'Non-PSI')}>
                  I want to workshop someone else’s idea!
                <p className="coming_soon">(Coming Soon)</p>
                </Button>
              </Link>
            </Test>
          </Wrapper >
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