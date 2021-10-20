import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

const SubmitForm = () => {

  const [timeStamp, setTimeStamp] = useState(new Date());
  const [projectIdea, setProjectIdea] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');
  const [data, setData] = useState(null);
  const getData = () =>
    fetch('https://cms-api-staging.devlaunchers.com/idea-cards')
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])





  const submitHandler = e => {
    e.preventDefault();
    let currentTime = new Date().toLocaleDateString('en-US');
    setTimeStamp({ timeStamp: currentTime });
    const ideaInfo = {
      created_at: timeStamp,
      description: notes,
      targetAudience: targetAudience,
      ideaName: projectIdea,
      tagline: tags,
    }
    axios.post('https://cms-api-staging.devlaunchers.com/idea-cards', ideaInfo)
      .then(response => {
        alert('Your idea has been submitted successfully');
      })
      .catch(e => {
        alert(`Oops there was an error`)
        console.log(`Error updating the user info.`);
      });

  };

  console.log()

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

