import axios from 'axios';
import React , { Component, useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
// import axios from 'axios';

import { env } from '../utils/EnvironmentalVariables';

export default class SubmitForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            ideaName: '',
            tagline: '',
            description: '',
            targetAudience: '',
            hourCommitmentMin: 0,
            hourCommitmentMax: 0,
            skills: [ 
                {skill: 'Web Development'},
                {skill: 'AI / ML'},
            ],
            openPositions: [
                { 
                    title: 'Developer, UX/UI',
                    description: 'Lots of programming',
                    isHidden: false
                }
            ],
            author: '1',
            difficultyLevel: 'Beginner',
            // timeStamp: new Date(),
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        // i don't think we need the date stuff?
        // get request of test posts still have a date
            // let currentTime =  new Date().toLocaleDateString('en-US');
            // this.setState({timeStamp: currentTime});

        axios.post(`${env().STRAPI_URL}/idea-cards/`, this.state)
            .then(response => {
                console.log(response);
        });

        this.setState({
            ideaName: '',
            targetAudience: '',
            description: '',
            tagline: '',
        })

    };

    render(){
        const  { ideaName, targetAudience, description, tagline }  = this.state;
        return (
            <Container fluid className = 'container' id='formWrapper'>
                <Header as='h1'>Submit your idea!!!</Header>
                <Form id='survey-form' className='form' method='post' onSubmit={this.submitHandler}>
                    <Form.Field>
                        <label>What project idea?</label>
                        <input required type='text' name = 'ideaName' value = {ideaName} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Who's is the target audience for your idea?</label>
                        <input required type='text' name = 'targetAudience' value = {targetAudience} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Notes</label>
                        <input type='text' name = 'description' value = {description} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Tags</label>
                        <input type='text' name = 'tagline' value = { tagline } onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Button color='blue' type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}

