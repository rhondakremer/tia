// Import Information 
import React from "react";
import "./index.css";
import "./App.css";
import { MDBDataTable } from "mdbreact";

// App Function  Data
function App() {
  const data = {

// Column Data
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "disabled",
        width: 100,
      },
    ],

// Row Data
    rows: [
      {
        name: "Olivia Maxi",
        position: "Secretary",
        office: "Benton Harbor",
        age: "44",
        salary: "$25000",
      },
      {
        name: "Matthew Jarred",
        position: "Accountant",
        office: "Benton Harbor",
        age: "63",
        salary: "56000",
      },
      {
        name: "Ashton Carter ",
        position: "Junior Technical Assistant",
        office: "Taylor",
        age: "23",
        salary: "$35000",
      },
      {
        name: "Cedric Peters",
        position: "Javascript Developer",
        office: "Taylor",
        age: "48",
        salary: "89000",
      },
      {
        name: "Ari Janes",
        position: "Junior Technical Assistant",
        office: "Benton Harbor",
        age: "37",
        salary: "75000",
      },
      {
        name: "Kimberly Williamson",
        position: "Accountant Director",
        office: "Taylor",
        age: "50",
        salary: "65000",
      },
      {
        name: "Michael Chandler",
        position: "Sales Assistant",
        office: "Taylor",
        age: "33",
        salary: "$23000",
      },
      {
        name: "Rhonda Davidson",
        position: "Sales Assistant",
        office: "Benton Harbor",
        age: "27",
        salary: "$22000",
      },
      {
        name: "Ronald Hurst",
        position: "Javascript Developer",
        office: "Benton Harbor",
        age: "44",
        salary: "$95000",
      },
      {
        name: "Jermaine Frost",
        position: "Computer Engineer",
        office: "Benton Harbor",
        age: "29",
        salary: "$55000",
      },
      {
        name: "Herman Julyoende",
        position: "Computer Engineer",
        office: "Taylor",
        age: "58",
        salary: "$108000",
      },
      {
        name: "Quinn Flynn",
        position: "Office Manager",
        office: "Benton Harbor",
        age: "62",
        salary: "$84000",
      },
      {
        name: "Chardenina Marshall",
        position: "Office Manager",
        office: "Taylor",
        age: "53",
        salary: "$74000",
      },
    ],
  };

//  Return App on DOM Information
  return (
    <div className="App" style={{ color: "#f0c2c1" }}>
      <MDBDataTable
        style={{ color: "#80deea" }}
        striped
        bordered
        small
        data={data}
      />
    </div>
  );
}

// Export Information
export default App;
