import React, { useState } from 'react';
import axios from 'axios';

import { env } from '../../utils/EnvironmentalVariables';

import {
  Wrapper,
  Headline,
  Button,
  Test,
  Question,
  LastQuestion,
  Submit,
  Container,
  SubmitWrapper,
} from './styledSubmitIdea';


function SubmitIdea() {

  const [selected, setSelected] = useState('');

  const [ideaName, setIdeaName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [hourCommitmentMin, setHourCommitmentMin] = useState(0);
  const [hourCommitmentMax, setHourCommitmentMax] = useState(0);
  const [skills, setSkills] = useState([
    { skill: 'Web Developer' },
    { skill: 'AI / ML' },
  ]);
  const [openPositions, setOpenPositions] = useState([
    {
      title: 'Developer, UX/UX',
      description: 'Lots of programing',
      isHidden: false
    }
  ]);
  const [author, setAuthor] = useState('1');
  const [difficultyLevel, setDifficultyLevel] = useState('Beginner');
  //const [timeStamp, setTimeStamp] = useState(new Date());


  const submitHandler = e => {
    e.preventDefault();
    // i don't think we need the date stuff?
    // get request of test posts still have a date
    // let currentTime =  new Date().toLocaleDateString('en-US');
    // this.setState({timeStamp: currentTime});
    var state = {
      ideaName: ideaName,
      tagline: tagline,
      description: description,
      targetAudience: targetAudience,
      hourCommitmentMin: hourCommitmentMin,
      hourCommitmentMax: hourCommitmentMax,
      skills: skills,
      openPositions: openPositions,
      author: author,
      difficultyLevel: difficultyLevel,
    }

    axios.post(`${env().STRAPI_URL}/idea-cards/`, state)
      .then(response => {
        console.log(response);
      });


    setIdeaName('');
    setTargetAudience('');
    setDescription('');
    setTagline('');
    setSelected('submited');

  };

  console.log(hourCommitmentMax)

  const handleClick = (e, n) => {
    setHourCommitmentMax(e);
    setSelected(n)
  }


  if (selected === '') {
    return (
      <Wrapper>
        <Test>
          <Headline>I have an idea about...</Headline>
          <Button onClick={() => handleClick(1, 'PSI')}>Solving a Problem</Button>
          <Button onClick={() => handleClick(2, 'Non-PSI')}>A New Idea</Button>
        </Test>
      </Wrapper>
    );
  }

  if (selected === 'PSI') {
    return (
      <Wrapper>
        <Container>
          <form onSubmit={submitHandler}>
            <Headline>I have an idea about solving a problem</Headline>
            <Question>
              <p>The problem I want to solve is</p>
              <input required type="text" name="ideaName" value={ideaName} onChange={(e) => setIdeaName(e.target.value)} />
            </Question>
            <Question>
              <p>I plan on solving this problem by</p>
              <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Question>
            <Question>
              <p>This solution would help</p>
              <input type='text' name='targetAudience' value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
            </Question>
            <LastQuestion>
              <input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)} />
              <p>Is something I need help with</p>
            </LastQuestion>
            <Submit type="submit">Submit</Submit>
          </form>
        </Container>
      </Wrapper>
    )
  }

  if (selected === 'Non-PSI') {
    return (
      <Wrapper>
        <Container>
          <form onSubmit={submitHandler}>
            <Headline>I have an idea about</Headline>
            <Question>
              <p>My idea is</p>
              <input required type="text" name="ideaName" value={ideaName} onChange={(e) => setIdeaName(e.target.value)} />
            </Question>
            <Question>
              <p>I will achive this by</p>
              <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Question>
            <Question>
              <p>People would use this because</p>
              <input type='text' name='targetAudience' value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
            </Question>
            <LastQuestion>
              <input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)} />
              <p>Is something I need help with</p>
            </LastQuestion>
            <Submit type="submit">Submit</Submit>
          </form>
        </Container>
      </Wrapper>
    )
  }

  if (selected === 'submited') {
    return (
      <Wrapper>
        <SubmitWrapper>
          <p>Thank you for submitting your idea!
Next your idea will move on to the workshopping phase. </p>
          <button>Next</button>
        </SubmitWrapper>
      </Wrapper>
    )
  }

}

export default SubmitIdea;