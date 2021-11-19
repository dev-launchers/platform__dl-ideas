import Data from './data';

function Comments() {
  return (
    <div>
      <h2>Comments:</h2>
      <div>
        <CommentList data={Data} />
      </div>
      <div>
        <CommentForm />
      </div>
    </div>
  );
}

export default Comments;