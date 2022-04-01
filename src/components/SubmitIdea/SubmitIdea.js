import React, { useState } from 'react';
import axios from 'axios';
import './submitIdea.css'
import { Link } from 'react-router-dom'

import { env } from '../../utils/EnvironmentVariables';

import {
  Wrapper,
  Headline,
  Button,
  Test,
  Question,
  Question2,
  LastQuestion,
  Submit,
  Container,
  SubmitWrapper,
  Description
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
  const [discord, setDiscord] = useState('');
  const [email, setEmail] = useState('');
  const [calendly, setCalendly] = useState('');
  const [features, setFeatures] = useState('');
  const [experience, setExperience] = useState('');
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
      discord: discord,
      email: email,
      calendly: calendly,
      features: features,
      experience: experience,
    }


    axios.post('http://localhost:1337/idea-cards/', state)
      //axios.post(`${env().STRAPI_URL}/idea-cards/`, state)
      .then(response => {
        console.log(response);
      });


    setIdeaName('');
    setTargetAudience('');
    setDescription('');
    setTagline('');
    setSelected('submited');
    setDiscord('');
    setEmail('');
    setCalendly('');
    setFeatures('');
    setExperience('')
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
          <Headline>Dev Ideas</Headline>
          <Description>
            Have an idea for a development project?<br />
            Want to help develop an idea?<br />
            Let’s get started!
          </Description>
          <Button onClick={() => handleClick(1, 'PSI')}>Solving a Problem</Button>
          <Link to="/cards">
            <Button onClick={() => handleClick(2, 'Non-PSI')}>
              I want to workshop someone else’s idea!
            <p className="coming_soon">(Coming Soon)</p>
            </Button>
          </Link>
        </Test>
      </Wrapper >
    );
  }

  if (selected === 'PSI') {
    return (
      <Wrapper>
        <Container>
          <Headline>Dev Ideas</Headline>
          <Description>
            Have an idea for a development project?<br />
            Share your idea with us!<br />
          </Description>
          <form onSubmit={submitHandler}>
            <div className="test">
              <div className="progress_bar">
                <div className="circule"><div className="completed"></div><p>Idea Form</p></div>
                <div className="circule"><div className=""></div><p>Review</p></div>
                <div className="circule"><div className=""></div><p>Workshopping</p></div>
                <div className="circule"><div className=""></div><p>Recruitment</p></div>
                <div className="circule"><div className=""></div><p>Project</p></div>
              </div>
            </div>
            <Question>
              <p>Idea Name</p>
              <input required type="text" name="ideaName" value={ideaName} onChange={(e) => setIdeaName(e.target.value)} />
            </Question>
            <Question>
              <p>Your Discord Name</p>
              <input required type="text" name="discord" value={discord} onChange={(e) => setDiscord(e.target.value)} />
            </Question>
            <Question>
              <p>Your Email</p>
              <input required type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Question>
            <Question>
              <p>Do you have a Calendly? If so add a link here, if not it’s okay!</p>
              <input required type="text" name="calendly" value={calendly} onChange={(e) => setCalendly(e.target.value)} />
            </Question>
            <Question2>
              <p>What is your experience with development?</p>
              <input type='text' name='experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
            </Question2>
            <Question2>
              <p>What is your idea?</p>
              <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Question2>
            <Question2>
              <p>Why do you think your idea is helpful or would be fun?</p>
              <input type='text' name='targetAudience' value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
            </Question2>
            <Question2>
              <p>What features would your idea have?</p>
              <input type='text' name='features' value={features} onChange={(e) => setFeatures(e.target.value)} />
            </Question2>
            <Question2>
              <p>Anything else you want to share with us?</p>
              <input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)} />
            </Question2>
            <p className="text">After submitting your idea will be reviewed and enter the
workshopping stage !</p>
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