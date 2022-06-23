import axios from "axios"

function CommentForm(props) {

  const {selectedCard, ...other} = props;

  const handleChange = (e) => {
    props.setHandleChange(e.target.value)
  }

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange }

    axios.post(`https://api-staging.devlaunchers.org/idea-cards/${props.selectedCard.id}/comment`, data)
      .then(response => {
        
        if (response.status === 200 ) {
          props.setHandleChange('')
          props.setHandleTextChange('')
        }
      })
  }
// move to WorkshoppingPage
  return (
    <div >
      <form onSubmit={handleSubmit} className="form_box">
      <div className="user_name_comment_box">
          <input
            className="user_name_comment"
            type="text"
            name="author"
            placeholder="Your name..."
            value={props.handleChange}
            onChange={handleChange}
          />
      </div>


      <div className="user_comment">
          <img alt="user_image" className="userImageOne" src={`https://picsum.photos/70?random=${props.id}`} />
          <input
            type="text"
            name="text"
            placeholder="What are your thoughts?"
            value={props.handleTextChange}
            onChange={handleTextChange}
          />
      </div>
      <div className="button_box" >
      <button type="submit">Submit</button>
      </div>
      <div className="side_button_box">

      </div>


      </form>
    </div>
  );
}

export default CommentForm;
