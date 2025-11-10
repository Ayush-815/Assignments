import React from "react";
import Table from "../components/Table";

const TableDoc = () => {
  const codeUsage = `
import Table from "./components/Table";

const columns = ["Name", "Email", "Role"];
const data = [
  { Name: "Ayush Acharya", Email: "ayush@example.com", Role: "Admin" },
  { Name: "Madan Rijal", Email: "madan@example.com", Role: "User" },
];

export default function Example() {
  return <Table columns={columns} data={data} />;
};
  `;

  const columns = ["Name", "Email", "Role"];
  const data = [
    { Name: "Ayush Acharya", Email: "ayush@example.com", Role: "Admin" },
    { Name: "Madan Rijal", Email: "madan@example.com", Role: "User" },
    { Name: "Rujal Sapkota", Email: "rujal@example.com", Role: "Editor" },
  ];

  return (
    <div className="page doc-page">
      <h1>Table</h1>
      <p>
        The <code>Table</code> component is used to display structured data in
        rows and columns. Provide an array of <code>columns</code> and{" "}
        <code>data</code>.
      </p>

      <h2>Usage</h2>
      <pre className="code-block">
        <code>{codeUsage}</code>
      </pre>

      <h2>Example</h2>
      <div className="example-area">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableDoc;