'use client'
import React, { useState, useEffect } from "react";

const CSRExample = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Code Queen"); 
  }, []);

  return <h1>Hello, {name} from CSR!</h1>;
};

export default CSRExample;

//Output : Hello, Code Queen from CSR!
