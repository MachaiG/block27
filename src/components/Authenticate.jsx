import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = "https://fsa-jwt-practice.herokuapp.com/";

  async function handleClick() {
    try {
      console.log("click recieved");
      const response = await fetch(`${API_URL}authenticate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate token!</button>
    </>
  );
}
