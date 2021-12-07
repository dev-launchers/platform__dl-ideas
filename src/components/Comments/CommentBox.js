import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Idea from './Idea';
import './test.css';

function Comments() {

  const [data, setData] = useState(
    [
      { _id: 1, author: 'Bryan', text: 'Wow this is neat', updatedAt: new Date(), createdAt: new Date() },
      { _id: 2, author: 'You', text: 'Thank you', updatedAt: new Date(), createdAt: new Date() },
    ]);
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');



  return (
    <div className="container">
      <Idea />
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