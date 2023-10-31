import React, { useContext } from 'react'
import testForm from '../Data/TestForm';
import CategorySelect from './CategorySelect';
import TestSelect from './TestSelect';
import { Contexts } from './Contexts';

const TestDetails = () => {
    const {setValue} = useContext(Contexts)
  return (
    <div className="flex justify-between px-20 py-5">
        {testForm.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <label className="pl-1" htmlFor="">
                {item.label}
              </label>
              {item.label === "Select Category" ? (
                <CategorySelect />
              ) : item.label === "Choose Test" ? (
                <TestSelect />
              ) : (
                <input
                  type={item.type}
                  className="border border-solid border-gray-300 rounded-md p-1"
                />
              )}
            </div>
          );
        })}
        <div className="flex gap-1 items-end">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Value</label>
            <input className="border border-solid border-gray-300 rounded-md p-1" type="text" onChange={(e)=>setValue(e.target.value)} />
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white font-bold py-2 px-4  rounded">
            + Add test
          </button>
        </div>
      </div>
  )
}

export default TestDetails