import render from 'dom-serializer';
import React from 'react';
import SubmitIdea from './SubmitIdea';

export default function WelcomePage() {
  return (
    <div id="welcomeWrapper">
      <h1>DL-edu</h1>
      <h2>Welcome to the project</h2>
      <h2>GG WP</h2>
      <SubmitIdea />
    </div>
  )
}