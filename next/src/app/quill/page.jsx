"use client";
import React, { useState, useEffect } from "react";
import Editor from "../../components/jodit";

export default function App() {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <Editor name="description" initValue={value} onChange={handleChange} />
    </div>
  );
}
