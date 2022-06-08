import render from 'dom-serializer';
import React from 'react';
import SubmitIdea from '../components/SubmitIdea/SubmitIdea';

export default function WelcomePage() {
  return (
    <div id="welcomeWrapper">
      <h1>DL-Ideas</h1>
      <h2>Welcome to the project</h2>
      <SubmitIdea />
    </div>
  )
}