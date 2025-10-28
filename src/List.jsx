import React, { useState } from "react";

export default function List() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "emp1", salary: 45000 },
    { id: 2, name: "emp2", salary: 34000 },
    { id: 3, name: "emp3", salary: 56000 },
  ]);
  return (
    <div>
      {employees.map((i) => (
        <div key={i.id}>
          <p>ID : {i.id}</p>
          <p>Name : {i.name}</p>
          <p>Salary : {i.salary}</p>
        </div>
      ))}
    </div>
  );
}
