const { useState } = React;

const App = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Placeholder for real-time messaging logic
    console.log("Message:", message);
    $.ajax({
      url: "https://api.example.com/send-message", // Placeholder RESTful API
      method: "POST",
      data: { message },
      success: () => console.log("Message sent"),
    });
    setMessage("");
  };

  return (
    <div className='container mt-5'>
      <h1>Real-time Chat App</h1>
      <input
        type='text'
        className='form-control'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type a message...'
      />
      <button className='btn btn-primary mt-2' onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
