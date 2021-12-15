import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Idea from './Idea';
import './comments.css';

function Comments(props) {

  const [data, setData] = useState(
    [
      { _id: 1, author: 'Bryan', text: 'Hello', updatedAt: new Date(), createdAt: new Date() },
      { _id: 2, author: 'You', text: 'Hi', updatedAt: new Date(), createdAt: new Date() },
    ]);
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');

  return (
    <div className="container">
      <Idea selectedCard={props.selectedCard} />
      <div className="form">
        <CommentForm setHandleChange={setHandleChange} data={data} setData={setData} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} />
      </div>
      <div className="comments">
        <CommentList data={data} />
      </div>
    </div>
  );
}

export default Comments;