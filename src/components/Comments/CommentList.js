import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import axios from 'axios';

function CommentList(props) {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:1337/idea-cards/${props.selectedCard.id}/`)
      .then(response => {
        setData(response.data.comments)
      })
  })

  const commentNodes = data.map(comment => (
    <Comment author={comment.author} key={comment._id} id={comment._id}>
      {comment.text}
    </Comment>
  ));
  return (
    <div>
      {commentNodes}
    </div>
  );
};

export default CommentList;