import React from "react";
import patientForm from "./Data/PatientForm";
import GenderSelect from "./Components/GenderSelect";
import DoctorSelect from "./Components/DoctorSelect";
import {StateProvider} from "./Components/Contexts";
import TestDetails from "./Components/TestDetails";

const App = () => {
  const date = new Date();
  return (
    <StateProvider>
      <div className="flex justify-center px-5 py-5 ">
        <h1 className="text-3xl">Report</h1>
      </div>
      <div className="flex justify-between px-20 py-5">
        <div>Report No.</div>
        <div>
          Report Date:
          {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
        </div>
      </div>
      <div className="flex justify-between px-20 py-5">
        {patientForm.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <label className="pl-1" htmlFor="">
                {item.label}
              </label>
              {item.label === "Gender" ? (
                <GenderSelect />
              ) : item.label === "Select Dr." ? (
                <DoctorSelect />
              ) : (
                <input
                  type={item.type}
                  className="border border-solid border-gray-300 rounded-md p-1"
                />
              )}
            </div>
          );
        })}
      </div>
      <hr className="border border-gray-300 w-11/12 ml-auto mr-auto" />
      <TestDetails />
    </StateProvider>
  );
};

export default App;
