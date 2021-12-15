import Comment from './Comment';


function CommentList(props) {
  const commentNodes = props.data.map(comment => (
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