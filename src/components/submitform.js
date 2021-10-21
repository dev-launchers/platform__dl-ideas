import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

const SubmitForm = () => {

  const [timeStamp, setTimeStamp] = useState(new Date());
  const [projectIdea, setProjectIdea] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    let currentTime = new Date().toLocaleDateString('en-US');
    setTimeStamp({ timeStamp: currentTime });
    const ideaInfo = {
      timeStamp: timeStamp,
      projectIdea: projectIdea,
      targetAudience: targetAudience,
      notes: notes,
      tags: tags,
    }
    axios
      .post('https://sheet.best/api/sheets/80b3b2ab-831f-4049-a81a-0713020b673b', ideaInfo)
      .then(response => {
        console.log(response)
      })
    setTimeStamp(new Date());
    setProjectIdea('');
    setTargetAudience('');
    setNotes('');
    setTags('')
  }

  return (
    <Container fluid className='container' id='formWrapper'>
      <Header as='h1'>Submit your idea!!!</Header>
      <Form id='survey-form' className='form'>
        <Form.Field>
          <label>What project idea?</label>
          <input required type='text' name='projectIdea' value={projectIdea} onChange={e => setProjectIdea(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Who's is the target audience for your idea?</label>
          <input required type='text' name='targetAudience' value={targetAudience} onChange={e => setTargetAudience(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Notes</label>
          <input type='text' name='notes' value={notes} onChange={e => setNotes(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input type='text' name='tags' value={tags} onChange={e => setTags(e.target.value)}></input>
        </Form.Field>
        <Button color='blue' type='submit' onClick={submitHandler}>Submit</Button>
      </Form>
    </Container>
  )
}

export default SubmitForm;

