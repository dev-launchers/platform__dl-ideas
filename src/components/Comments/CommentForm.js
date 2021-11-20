function CommentForm(props) {

  const handleChange = (e) => {
    props.setHandleChange(e.target.value)
  }

  const handleTextChange = (e) => {
    props.setHandleTextChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setData([
      ...props.data,
      { _id: 4, author: props.handleChange, text: props.handleTextChange, updatedAt: new Date(), createdAt: new Date() }
    ])
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
      <input
        type="text"
        name="text"
        placeholder="Say something..."
        value={props.handleTextChange}
        onChange={handleTextChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
