import React from "react";
import Table from "../components/Table";

const data = [
  { id: 1, name: "Abhishek", age: 20, role: "UI/UX" },
  { id: 2, name: "Ritik", age: 22, role: "Backend" },
  { id: 3, name: "Saniya", age: 19, role: "Frontend" },
  { id: 4, name: "Abhishek", age: 20, role: "UI/UX" },
  { id: 5, name: "Ritik", age: 22, role: "Backend" },
  { id: 6, name: "Saniya", age: 19, role: "Frontend" },
  { id: 7, name: "Abhishek", age: 20, role: "UI/UX" },
  { id: 8, name: "Ritik", age: 22, role: "Backend" },
  { id: 9, name: "Saniya", age: 19, role: "Frontend" },
  
];

const columns = [
  { label: "ID", accessor: "id" },
  { label: "Name", accessor: "name" },
  { label: "Age", accessor: "age" },
  { label: "Role", accessor: "role" },
];

function Checktable() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Team Members</h1>
      <Table data={data} columns={columns} itemsPerPage={5} />
    </div>
  );
}

export default Checktable;
