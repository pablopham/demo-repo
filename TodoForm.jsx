
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h2>{text}</h2>

      <ListItem>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Add To-do"
            variant="outlined"
            value={text}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleSubmit}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </ListItem>
    </>
  );
}
