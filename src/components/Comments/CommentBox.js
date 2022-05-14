import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Idea from './Idea';

import LeaderInfo from './LeaderInfo';


import './comments.css';
import axios from 'axios';

function Comments(props) {
  const [data, setData] = useState(
    {
      ideaName:'',
      discord:'',
      description:'',
      email:'',
      created_at: '',
      comments: [''],
    }
  );
  const location = useLocation();
  const pathname = location.pathname;
  const ideaId = pathname.slice(14, 19);

  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');


  useEffect(() => {
    axios.get(`https://api-staging.devlaunchers.org/idea-cards/${ideaId}`)
      .then(response => {

        if (response.status === 200 ) {
          setData(response.data)
        }
      })
  }, [])


  return (




    <div className="container">
        <div >
          <div>
            <Idea selectedCard={data} />
          </div>

          <div className="form">
            <CommentForm setHandleChange={setHandleChange} data={data} setData={setData} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
          </div>

          <div className="comments">
            <CommentList data={data} selectedCard={data} />
          </div>
        </div>

        <div>
          <div>
            <LeaderInfo selectedCard={data} />
          </div>
        </div>
      </div>
    // </div>

  );
}

export default Comments;