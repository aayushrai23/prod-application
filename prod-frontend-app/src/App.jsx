import { useEffect, useState } from "react";
import { fetchHealth } from "./api";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [uptime, setUptime] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHealth()
      .then((data) => {
        setStatus(data.status);
        setUptime(data.uptime.toFixed(2));
      })
      .catch(() => {
        setError("Backend not reachable ❌");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Production App Dashboard</h1>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <p>Status: <b>{status}</b></p>
          <p>Uptime: {uptime} seconds</p>
        </>
      )}
    </div>
  );
}

export default App;
