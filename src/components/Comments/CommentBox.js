import Data from './data.js';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './test.css';

function Comments() {

  return (
    <div className="container">
      <div className="comments">
        <h2>Comments:</h2>
        <CommentList data={Data} />
      </div>
      <div className="form">
        <CommentForm />
      </div>
    </div>
  );
}

export default Comments;