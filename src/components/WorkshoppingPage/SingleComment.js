const SingleComment = props => (
  <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{props.author}</h3>
        <div source={props.children} ><p>{props.children}</p></div>
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
);

export default SingleComment;