import React , { Component, useState } from 'react';
import { Button, Form, Container, Header, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

const url = 'https://cms-api-staging.devlaunchers.com/idea-cards'; 
//http://localhost:1337/idea-cards

const skillsOptions = [
    {key: 'python', text: 'Python', value: 'python'},
    {key: 'ui/ux', text: 'UI/UX', value: 'ui/ux'},
    {key: 'marketing', text: 'Marketing', value: 'marketing'}
];
const openPositionsOptions = [
    {key: 'IdeaTeamDeveloper', 
    text: 'Developer1',
    value: 'developer1',
    },
    {key: 'IdeaTeamMarketingLead', 
    text: 'MarketingLead',
    value: 'MarketingLead',
    }
]

export default class SubmitForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            ideaName: '',
            tagline: '',
            description: '',
            targetAudience: '',
            hourCommitmentMin : 0,
            hourCommitmentMax : 0,
            skills: [],
            openPositions: [],
            author: '',
            difficultyLevel: '',
            published_at: new Date(),
            created_by: '',
            updated_by: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        let currentTime =  new Date().toLocaleDateString('en-US');
        this.setState({published_at: currentTime});
        console.log(this.state);
        axios
            .post(url, this.state)
            .then(response => {
             console.log(response);
        });
        this.setState({
            ideaName: '',
            tagline: '',
            description: '',
            targetAudience: '',
            hourCommitmentMin : 0,
            hourCommitmentMax : 0,
            skills: [],
            openPositions: [],
            author: '',
            difficultyLevel: '',
            published_at: new Date(),
            created_by: 'test',
            updated_by: 'test'
        })
        console.log(this.state);
    };

    render(){
        const  { ideaName, tagline, description, targetAudience, hourCommitmentMin,
            hourCommitmentMax, skills, openPositions, author, difficultyLevel }  = this.state;
        return (
            <Container fluid className = 'container' id='formWrapper'>
                <Header as='h1'>Submit your idea!!!</Header>
                <Form id='survey-form' className='form'>
                    <Form.Field>
                        <label>Project Idea Name</label>
                        <input required type='text' name = 'ideaName' value = {ideaName} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Tagline</label>
                        <input required type='text' name = 'tagline' value = {tagline} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input required type='text' name = 'description' value = {description} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Target Audience</label>
                        <input required type='text' name = 'targetAudience' value = {targetAudience} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Minimum time commitment (hrs)?</label>
                        <input required type='number' name = 'hourCommitmentMin' value = {hourCommitmentMin} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Maximum time commitment (hrs)?</label>
                        <input required type='number' name = 'hourCommitmentMax' value = {hourCommitmentMax} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Skills</label>
                        <Dropdown placeholder = 'Skills' fluid multiple selection options = {skillsOptions} onChange = {this.changeHandler}></Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Open Positions</label>
                        <Dropdown placeholder = 'Open Positions'  fluid multiple selection options = {openPositionsOptions} onChange = {this.changeHandler}></Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Author</label>
                        <input required type='text' name = 'author' value = {author} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Difficulty Level</label>
                        <input required type='text' name = 'difficultyLevel' value = {difficultyLevel} onChange={this.changeHandler}></input>
                    </Form.Field>
                    <Button color='blue' type='submit' onClick={this.submitHandler}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

