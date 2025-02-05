import React from "react";

interface HeaderProps {
  onClearFilters: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClearFilters }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <h1>Near-Earth Object Overview</h1>
      <button
        onClick={onClearFilters}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginLeft: "15px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none", 
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease, transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Clear Filters and Sorters
      </button>
    </div>
  );
};

export default Header;
