import { Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input) {
      navigate("/page");
    } else {
      alert("Please enter a value");
    }
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

const Page = () => {
  return "Page";
};

function App() {
  return (
    <div className="App">
      <Route path="/" element={<Home />}></Route>
      <Route path="/page1" element={<Page />}></Route>
    </div>
  );
}

export default App;
