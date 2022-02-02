import axios from "axios"

function CommentForm(props) {

  const handleChange = (e) => {
    props.setHandleChange(e.target.value)
  }

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = { author: props.handleChange, text: props.handleTextChange }

    axios.post(`http://localhost:1337/idea-cards/${props.selectedCard.id}/comment`, data)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Your name..."
        value={props.handleChange}
        onChange={handleChange}
      />
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
