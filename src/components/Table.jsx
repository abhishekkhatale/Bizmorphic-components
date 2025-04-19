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

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md w-full max-w-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800 border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500 tracking-wider">
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-5 py-3 text-left font-medium cursor-pointer select-none hover:text-gray-700"
                  onClick={() => handleSort(col.accessor)}
                >
                  {col.label}
                  {sortBy === col.accessor && (
                    <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {columns.map((col) => (
                  <td key={col.accessor} className="px-5 py-3">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 text-gray-400"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
