const ResultNode = ({ data }) => {
  return (
    <div style={styles.node}>
      <p style={styles.label}>Output</p>

      <div style={styles.output}>
        {data.response || "Result will appear here"}
      </div>
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
  output: {
    minHeight: 120,
    maxHeight: 150,
    overflowY: "auto",
    background: "#f9fafb",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #eee",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    color: "#111",
  },
};

export default ResultNode;