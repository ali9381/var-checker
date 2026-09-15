import { useState } from "react";

export default function Home() {
  const [points, setPoints] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const total = (parseFloat(points) / 9400000) * 25;
    setResult(total.toFixed(2));
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>Variational Unofficial VAR Point Checker</h1>
      <p>Enter your points:</p>
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        placeholder="Your points"
        style={{ padding: "10px", width: "200px" }}
      />
      <br /><br />
      <button onClick={calculate} style={{ padding: "10px 20px" }}>
        Check VAR
      </button>
      {result !== null && (
        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          <strong>Your VAR Score:</strong> {result}
        </div>
      )}
    </div>
  );
}
