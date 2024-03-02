import React, { useState } from "react";

const ComparisonCreation = () => {
  const [rows, setRows] = useState([
    ["Features", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [columnCount, setColumnCount] = useState(3);

  const getEntry = (rowIndex, columnIndex) => {
    return rows[rowIndex][columnIndex];
  };

  const setEntry = (rowIndex, columnIndex, entry) => {
    if (rowIndex === 0 && columnIndex === 0) {
      return;
    }
    const newRows = [...rows];
    newRows[rowIndex][columnIndex] = entry;
    setRows(newRows);
  };

  const addRow = () => {
    const newRow = Array.from({ length: columnCount }, () => "");
    setRows([...rows, newRow]);
  };

  const removeRow = () => {
    if (rows.length === 1) {
      return;
    }
    const newRows = [...rows];
    newRows.pop();
    setRows(newRows);
  };

  const addColumn = () => {
    const newRows = rows.map((row) => [...row, ""]);
    setRows(newRows);
    setColumnCount((prevCount) => prevCount + 1);
  };

  const removeColumn = () => {
    if (columnCount === 1) {
      return;
    }
    const newRows = rows.map((row) => {
      const newRow = [...row];
      newRow.pop();
      return newRow;
    });
    setRows(newRows);
    setColumnCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex justify-center items-center w-full mt-12 mb-12">
      <div className="flex flex-col items-center w-2/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          Comparison Updation
        </span>
        <div className="flex justify-center items-center mt-6 mb-6 w-5/6 ">
          <table className="border-separate border border-nota-black font-markazi-text text-nota-blue text-xl w-full h-full table-fixed">
            <thead>
              <tr>
                {rows[0].map((data, index) => (
                  <th
                    key={index}
                    className="border-separate border border-nota-black bg-nota-lightblue"
                  >
                    {index === 0 ? (
                      <div className="font-markazi-text text-2xl text-nota-black">
                        {data}
                      </div>
                    ) : (
                      <input
                        className="border border-nota-black p-2 w-full bg-nota-gray placeholder-nota-black outline-none bg-nota-lightblue"
                        type="text"
                        value={data}
                        onChange={(e) => setEntry(0, index, e.target.value)}
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1, rows.length).map((row, index) => (
                <tr key={index}>
                  {row.map((data, dataIndex) => (
                    <td
                      key={dataIndex}
                      className="border-separate border border-nota-black"
                    >
                      <input
                        className={` ${
                          dataIndex === 0 ? "bg-nota-gray" : ""
                        } border border-nota-black p-2 w-full placeholder-nota-black outline-none`}
                        type="text"
                        value={data}
                        onChange={(e) =>
                          setEntry(index + 1, dataIndex, e.target.value)
                        }
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
            onClick={removeRow}
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
            onClick={removeColumn}
          >
            Delete Column
          </button>
        </div>
        <div className="flex w-full justify-end items-center mr-36">
          <button className="flex justify-center items-center h-12 w-28 bg-nota-red rounded-full font-markazi-text text-xl font-bold ml-32">
            Delete
          </button>
          <button className="flex justify-center items-center h-12 w-28 bg-nota-newyellow rounded-full font-markazi-text text-xl font-bold ml-2">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCreation;
