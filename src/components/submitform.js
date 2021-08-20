import React , { Component, useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

export default class SubmitForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            timeStamp: new Date(),
            projectIdea: '',
            targetAudience: '',
            notes: '',
            tags: '',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        let currentTime =  new Date().toLocaleDateString('en-US');
        this.setState({timeStamp: currentTime});
        console.log(this.state);
        axios
            .post('https://sheet.best/api/sheets/80b3b2ab-831f-4049-a81a-0713020b673b', this.state)
            .then(response => {
             console.log(response);
        });
        this.setState({
            timeStamp: new Date(),
            projectIdea: '',
            targetAudience: '',
            notes: '',
            tags: ''
        })
    };

    render(){
        const  { projectIdea, targetAudience, notes, tags }  = this.state;
        return (
            <Container fluid className = 'container' id='formWrapper'>
                <Header as='h1'>Submit your idea!!!</Header>
                <Form id='survey-form' className='form'>
                    <Form.Field>
                        <label>What project idea?</label>
                        <input required type='text' name = 'projectIdea' value = {projectIdea} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Who's is the target audience for your idea?</label>
                        <input required type='text' name = 'targetAudience' value = {targetAudience} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Notes</label>
                        <input type='text' name = 'notes' value = {notes} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Tags</label>
                        <input type='text' name = 'tags' value = { tags } onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Button color='blue' type='submit' onClick={this.submitHandler}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

