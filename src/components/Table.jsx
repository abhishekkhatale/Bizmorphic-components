import React, { useState, useMemo } from "react";

const Table = ({ columns, data, itemsPerPage = 5 }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.accessor])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data, columns]);

  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (typeof aVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }
      return sortOrder === "asc"
        ? String(aVal).localeCompare(bVal)
        : String(bVal).localeCompare(aVal);
    });
  }, [sortBy, sortOrder, filteredData]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (accessor) => {
    if (sortBy === accessor) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(accessor);
      setSortOrder("asc");
    }
  };

  const containerStyle = {
    width: "100%",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "0.75rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  };

  const searchInputStyle = {
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    width: "100%",
    maxWidth: "20rem",
    outline: "none",
  };

  const searchInputFocusStyle = {
    ringWidth: "1px",
    ringColor: "#9ca3af",
  };

  const tableContainerStyle = {
    overflowX: "auto",
  };

  const tableStyle = {
    minWidth: "100%",
    fontSize: "0.875rem",
    color: "#1f2937",
    borderCollapse: "collapse",
  };

  const tableHeadRowStyle = {
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "#6b7280",
    letterSpacing: "0.05em",
  };

  const tableHeadCellStyle = {
    padding: "0.75rem 1.25rem",
    textAlign: "left",
    fontWeight: "500",
    cursor: "pointer",
    userSelect: "none",
  };

  const tableHeadCellHoverStyle = {
    color: "#374151",
  };

  const tableBodyRowStyle = {
    borderBottom: "1px solid #f3f4f6",
    transition: "background-color 0.2s",
  };

  const tableBodyRowHoverStyle = {
    backgroundColor: "#f9fafb",
  };

  const tableBodyCellStyle = {
    padding: "0.75rem 1.25rem",
  };

  const noDataCellStyle = {
    textAlign: "center",
    padding: "1.5rem 0",
    color: "#9ca3af",
  };

  const paginationContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1.5rem",
    fontSize: "0.875rem",
    color: "#4b5563",
  };

  const paginationButtonStyle = {
    padding: "0.5rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    transition: "background-color 0.2s",
    cursor: "pointer",
  };

  const paginationButtonHoverStyle = {
    backgroundColor: "#f3f4f6",
  };

  const paginationButtonDisabledStyle = {
    opacity: "0.5",
    cursor: "not-allowed",
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredHeaderCell, setHoveredHeaderCell] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredPrevButton, setHoveredPrevButton] = useState(false);
  const [hoveredNextButton, setHoveredNextButton] = useState(false);

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          ...searchInputStyle,
          ...(isSearchFocused ? searchInputFocusStyle : {})
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
      />

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeadRowStyle}>
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  style={{
                    ...tableHeadCellStyle,
                    ...(hoveredHeaderCell === col.accessor ? tableHeadCellHoverStyle : {})
                  }}
                  onClick={() => handleSort(col.accessor)}
                  onMouseEnter={() => setHoveredHeaderCell(col.accessor)}
                  onMouseLeave={() => setHoveredHeaderCell(null)}
                >
                  {col.label}
                  {sortBy === col.accessor && (
                    <span style={{ marginLeft: "0.25rem" }}>
                      {sortOrder === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                style={{
                  ...tableBodyRowStyle,
                  ...(hoveredRow === i ? tableBodyRowHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {columns.map((col) => (
                  <td key={col.accessor} style={tableBodyCellStyle}>
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  style={noDataCellStyle}
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={paginationContainerStyle}>
        <button
          style={{
            ...paginationButtonStyle,
            ...(currentPage === 1 ? paginationButtonDisabledStyle : {}),
            ...(hoveredPrevButton && currentPage !== 1 ? paginationButtonHoverStyle : {})
          }}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          onMouseEnter={() => setHoveredPrevButton(true)}
          onMouseLeave={() => setHoveredPrevButton(false)}
        >
          Previous
        </button>
        <span>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          style={{
            ...paginationButtonStyle,
            ...(currentPage === totalPages ? paginationButtonDisabledStyle : {}),
            ...(hoveredNextButton && currentPage !== totalPages ? paginationButtonHoverStyle : {})
          }}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          onMouseEnter={() => setHoveredNextButton(true)}
          onMouseLeave={() => setHoveredNextButton(false)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;