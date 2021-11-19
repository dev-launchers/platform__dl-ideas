function CommentForm(props) {

  const handleChange = (e) => {
    e.preventDefault();
    console.log('test')
  }

  const handleTextChange = (e) => {
    e.preventDefault();
    console.log('test2')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test3');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Your name..."
        value={props.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="text"
        placeholder="Say something..."
        value={props.text}
        onChange={handleTextChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
