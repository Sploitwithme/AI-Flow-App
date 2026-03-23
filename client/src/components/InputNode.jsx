const InputNode = ({ data }) => {
  return (
    <div style={styles.node}>
      <p style={styles.label}>Input</p>

      <textarea
        value={data.prompt}
        onChange={(e) => data.setPrompt(e.target.value)}
        placeholder="Type your question..."
        style={styles.textarea}
      />
    </div>
  );
};

const styles = {
  node: {
    background: "#ffffff",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    width: 240,
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  textarea: {
    width: "90%",
    minHeight: 120,
    maxHeight: 150,
    overflowY: "auto",
    background: "#f9fafb",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #eee",
    color: "#111",
    outline: "none",
    resize: "none",
  },
};

export default InputNode;