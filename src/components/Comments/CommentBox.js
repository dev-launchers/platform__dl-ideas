import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Idea from './Idea';
import './comments.css';
import axios from 'axios';

function Comments(props) {

  const [data, setData] = useState(
    [

    ]);
  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');

  useEffect(() => {
    axios.get("http://localhost:1337/idea-cards/3/")
      .then(response => {
        setData(response.data.comments)
      })

  }, [])


  return (
    <div className="container">
      <Idea selectedCard={props.selectedCard} />
      <div className="form">
        <CommentForm setHandleChange={setHandleChange} data={data} setData={setData} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={props.selectedCard} />
      </div>
      <div className="comments">
        <CommentList data={data} selectedCard={props.selectedCard} />
      </div>
    </div>
  );
}

export default Comments;