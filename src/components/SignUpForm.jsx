import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const API_URL = "https://fsa-jwt-practice.herokuapp.com/";

    try {
      const response = await fetch(`${API_URL}signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }

    console.log("a short message");
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username:{""}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>

        <label>
          Password:{""}
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
