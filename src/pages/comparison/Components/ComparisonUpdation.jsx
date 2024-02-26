import React, { useState } from "react";

const ComparisonUpdation = () => {
  // State variables to track the number of rows, feature column, and plan columns
  const [rowCount, setRowCount] = useState(4);
  const [featureColumn, setFeatureColumn] = useState(Array(rowCount).fill(""));
  const [planColumns, setPlanColumns] = useState(
    Array(rowCount).fill(Array(3).fill(""))
  );

  // Function to add a row
  const addRow = () => {
    setRowCount(rowCount + 1);
    setFeatureColumn([...featureColumn, ""]);
    // Initialize new plan columns for the added row
    setPlanColumns([...planColumns, Array(3).fill("")]);
  };

  // Function to delete a row
  const deleteRow = () => {
    if (rowCount > 1) {
      setRowCount(rowCount - 1);
      setFeatureColumn(featureColumn.slice(0, -1));
      setPlanColumns(planColumns.slice(0, -1));
    }
  };

  // Function to add a column
  const addColumn = () => {
    setPlanColumns(planColumns.map((column) => [...column, ""]));
  };

  // Function to delete a column
  const deleteColumn = () => {
    if (planColumns[0].length > 1) {
      setPlanColumns(planColumns.map((column) => column.slice(0, -1)));
    }
  };

  // Function to handle input change in the feature column
  const handleFeatureChange = (value, rowIndex) => {
    const updatedFeatureColumn = [...featureColumn];
    updatedFeatureColumn[rowIndex] = value;
    setFeatureColumn(updatedFeatureColumn);
  };

  // Function to handle input change in the plan columns
  const handlePlanChange = (value, rowIndex, colIndex) => {
    const updatedPlanColumns = [...planColumns];
    updatedPlanColumns[rowIndex][colIndex] = value;
    setPlanColumns(updatedPlanColumns);
  };

  return (
    <div className="flex justify-center items-center w-full mt-12 mb-12">
      <div className="flex flex-col items-center w-2/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          Comparison Updation
        </span>
        <div className="flex justify-center items-center mt-6 mb-6 w-5/6 ">
          <table className="border-separate border border-nota-black font-markazi-text text-nota-blue text-xl w-full h-full">
            <thead>
              <tr>
                <th className="border-separate border border-nota-black bg-nota-lightblue">
                  Features
                </th>
                {planColumns[0].map((_, index) => (
                  <th
                    key={index}
                    className="border-separate border border-nota-black bg-nota-lightblue"
                  >
                    Plan {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureColumn.map((feature, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border-separate border border-nota-black">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(e.target.value, rowIndex)
                      }
                      className="border border-nota-black p-2 w-full bg-nota-gray placeholder-nota-black outline-none"
                      placeholder={`Enter feature ${rowIndex + 1}`}
                    />
                  </td>
                  {planColumns[rowIndex].map((plan, colIndex) => (
                    <td
                      key={colIndex}
                      className="border-separate border border-nota-black"
                    >
                      <input
                        type="text"
                        value={plan}
                        onChange={(e) =>
                          handlePlanChange(e.target.value, rowIndex, colIndex)
                        }
                        className="border border-nota-black p-2 w-full"
                        placeholder={`Enter data for Plan ${colIndex + 1}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={addRow}
          >
            Add Row
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={deleteRow}
          >
            Delete Row
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={addColumn}
          >
            Add Column
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={deleteColumn}
          >
            Delete Column
          </button>
        </div>
        <div className="flex w-full justify-end items-center mr-36">
          <div className="flex flex-row h-12 mt-14 mb-10">
            <button className="flex justify-center items-center h-12 w-28 bg-nota-red rounded-full font-markazi-text text-xl font-bold ml-32">
              Delete
            </button>
            <button className="flex justify-center items-center h-12 w-28 bg-nota-newyellow rounded-full font-markazi-text text-xl font-bold ml-2">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonUpdation;
