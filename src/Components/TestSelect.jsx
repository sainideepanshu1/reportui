import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "./Contexts";

const TestSelect = () => {
  const { category, test,setTest } = useContext(Contexts);
  const [tests, setTests] = useState([]);
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/enter");
        const testData = response.data.data;
        const filteredData = testData.filter(
          (item) => item.Category === category
        );
        setTests(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestData();
  }, [category]);
  const handleTestSelect = (e) => {
    setTest(e.target.value);
  };

  return (
    <>
      <select
        name=""
        id=""
        className="p-1 border border-solid border-gray-300 rounded-md text-center"
        onChange={handleTestSelect}
        value={test}
      >
        <option value="">
          Select
        </option>
        {tests.map((item, index) => {
          return (
            <option key={index} value={item.Testname}>
              {item.Testname}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default TestSelect;
