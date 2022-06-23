import React, { useEffect, useState } from 'react';
import Comment from './SingleComment';
import axios from 'axios';

function DisplayComments(props) {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://api-staging.devlaunchers.org/idea-cards/${props.selectedCard.id}/`)
      .then(response => {
        setData((response.data.comments).sort((a, b) => a.published_at < b.published_at ? 1 : -1))
      })
  })


  const commentNodes = data.map(comment => (
    <Comment author={comment.author} key={comment._id} id={comment._id}>
      {comment.text}
    </Comment>
  ));
  return (
    <div >
      {commentNodes}
    </div>
  );
};

export default DisplayComments;