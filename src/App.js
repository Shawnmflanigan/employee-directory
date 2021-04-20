// import "./App.css";
import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable.js";
import Hero from "./components/Hero.js"
import SearchBar from "./components/SearchBar"

// const Title = () => (
//   <h1 style={{ width: "100%", textAlign: "center" }}>Employee Directory</h1>
// );

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Hero />  
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <EmployeeTable searchTerm={searchTerm}/>
    </div>
  );
}

export default App;