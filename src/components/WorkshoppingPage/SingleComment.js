import {
  SingleCommentContent,
  SingleCommentButtons,
  UserImage,
  SingleCommentWrap

} from './StyledSingleComment';





const SingleComment = props => (
  <SingleCommentWrap>
    <UserImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
    <div>
      <SingleCommentContent>
        <b>{props.author}: </b>
        <div source={props.children} ><p>{props.children}</p></div>
      </SingleCommentContent>
      <SingleCommentButtons />
      
    </div>
    </SingleCommentWrap>
);

export default SingleComment;