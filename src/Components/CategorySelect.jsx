import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "./Contexts";

const CategorySelect = () => {
  const { setCategory, setTest } = useContext(Contexts);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      await axios
        .get("http://localhost:4001/categoryenter")
        .then((response) => {
          setCategorys(response.data.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <select
        className="p-1 border border-solid border-gray-300 rounded-md text-center"
        name=""
        id=""
        onChange={(e) => {
          setCategory(e.target.value);
          setTest("");
        }}
      >
        <option value="">
          Select
        </option>
        {categorys.map((item, index) => {
          return (
            <option key={index} value={item.Entercategory}>
              {item.Entercategory}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CategorySelect;
