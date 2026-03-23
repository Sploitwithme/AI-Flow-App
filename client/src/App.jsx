import { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  // 🔥 Run Flow
  const handleRun = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  // 💾 Save
  const handleSave = async () => {
    try {
      await fetch("http://localhost:5000/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          response,
        }),
      });

      alert("Saved successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI Flow App</h2>

        <FlowCanvas
          prompt={prompt}
          setPrompt={setPrompt}
          response={response}
        />

        <div style={styles.buttonGroup}>
          <button style={styles.runButton} onClick={handleRun}>
            Run Flow
          </button>

          <button style={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "30px",
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    maxWidth: "1200px",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "15px",
    color: "#111",
    textAlign: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  runButton: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  saveButton: {
    padding: "10px 20px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default App;