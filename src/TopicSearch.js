import React, { useState } from "react";

const topics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Photosynthesis", category: "Biology" },
  { id: 3, name: "Calculus", category: "Mathematics" },
  { id: 4, name: "Quantum Mechanics", category: "Physics" },
  { id: 5, name: "Organic Chemistry", category: "Chemistry" }
];

export default function TopicSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div style={styles.container}>
        <h2 style={styles.heading}>Topic Search</h2>
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <div style={styles.cardContainer}>
          {filteredTopics.length > 0 ? (
            filteredTopics.map(topic => (
              <div key={topic.id} style={styles.card}>
                <h3>{topic.name}</h3>
                <p>{topic.category}</p>
              </div>
            ))
          ) : (
            <p style={styles.noResult}>No topics found</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box"
  },
  container: {
    maxWidth: "1000px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    transition: "box-shadow 0.3s ease"
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center"
  },
  noResult: {
    textAlign: "center",
    color: "#666"
  }
};
