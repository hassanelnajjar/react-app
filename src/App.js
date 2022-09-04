import { Route, useNavigate, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

const Home = (props) => {
  const { input, setInput } = props;
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
      <p>Home</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

const Page = (props) => {
  const { input } = props;
  if (input) {
    return (
      <>
        <p>Page</p>
        <p>{input}</p>
      </>
    );
  }
  return <Navigate to="/" replace />;
};

function App() {
  const [input, setInput] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<Home input={input} setInput={setInput} />}
      ></Route>

      <Route
        path="/page"
        element={<Page input={input} setInput={setInput} />}
      ></Route>
    </Routes>
  );
}

export default App;
