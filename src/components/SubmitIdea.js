import React, { useState } from 'react';

import {
  Wrapper,
  Headline,
  Button,
  Test,
  Question
} from './styledSubmitIdea';


function SubmitIdea() {

  const [selected, setSelected] = useState('');


  if (selected === '') {
    return (
      <Wrapper>
        <Test>
          <Headline>I have an idea about...</Headline>
          <Button onClick={(e) => setSelected('PSI')}>Solving a Problem</Button>
          <Button onClick={(e) => setSelected('Non-PSI')}>A New Idea</Button>
        </Test>
      </Wrapper>
    );
  }

  if (selected === 'PSI') {
    return (
      <Wrapper>
        <Headline>I have an idea about solving a problem</Headline>
        <Question>
          <p>The problem I want to solve is</p>
          <input />
        </Question>
        <Question>
          <p>I plan on solving this problem by</p>
          <input />
        </Question>
        <Question>
          <p>This solution would help</p>
          <input />
        </Question>
        <Question>
          <input />
          <p>Is something I need help with</p>
        </Question>
        <Button>Submit</Button>
      </Wrapper>
    )
  }

  if (selected === 'Non-PSI') {
    return (
      <Wrapper>
        <div>
          <Headline>I have an idea about</Headline>
          <Question>
            <p>My idea is</p>
            <input />
          </Question>
          <Question>
            <p>I will achive this by</p>
            <input />
          </Question>
          <Question>
            <p>People would use this because</p>
            <input />
          </Question>
          <Question>
            <input />
            <p>Is something I need help with</p>
          </Question>
          <button>Submit</button>
        </div>
      </Wrapper>
    )
  }

}

export default SubmitIdea;