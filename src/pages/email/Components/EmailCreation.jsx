// {
//   "type": "test",  // *
//   "subject": ["hello", 2, "and welcome"],  // *
//   "title": ["proposal for", 1],  // *
//   "subtitle": ["", 1, "", 2],  // *
//   "preview": ["", 1, "", 2],  // *

//   "above_email_body": "above email",  // *
//   "upper": [  // *
//       [
//           "Heading 1",
//           ["body 1", 2, "this is to inform you..."]
//       ],
//       [
//           "Heading 2",
//           ["body 2", 1, "and following that..."]
//       ]
//       // can add any number of items
//   ],
//   "middle_text": "middle text",  // *
//   "lower": [  // *
//       [
//           "Heading 1",
//           ["body 1", 2, "this is to inform you..."]
//       ],
//       [
//           "Heading 2",
//           ["body 2", 1, "and following that..."]
//       ]
//       // can add any number of items
//   ],
//   "below_email_body": "below email body",  // *
//   "attachments": [],  // *
//   "additional_data": "additional data",  // *
//   "payment_url": "payment.com"  // *
// }

import React from "react";

import { useState } from "react";

const EmailCreation = () => {
  const [type, setType] = useState("");
  const [subject, setSubject] = useState([]);

  const [title, setTitle] = useState([]);
  const [subtitle, setSubtitle] = useState([]);
  const [preview, setPreview] = useState([]);

  const [above_email_body, setAboveEmailBody] = useState("");
  const [upper, setUpper] = useState([]);
  const [middle_text, setMiddleText] = useState("");
  const [lower, setLower] = useState([]);
  const [below_email_body, setBelowEmailBody] = useState("");

  const [attachments, setAttachments] = useState([]);
  const [additional_data, setAdditionalData] = useState("");
  const [payment_url, setPayment_Url] = useState("");

  const placeholders = {
    1: "Company Name",
    2: "Company Address",
    3: "Company Phone",
  };

  const onChangeSubjectElement = (text, index) => {
    newSubject = [...subject];
    newSubject[index] = text;
    setSubject(newSubject);
  };

  const selectInDropdown = (value) => {
    if (value === "") {
      setSubject([...subject, value]);
    } else if (value === null) {
      return;
    } else {
      setSubject([...subject, parseInt(value)]);
    }
  };

  return (
    <div className="flex justify-center w-full mt-12">
      <div className="flex flex-col  items-center w-2/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          Email Template Creation
        </span>

        <form
          action=""
          className="w-full flex  flex-col justify-center items-center gap-y-8 mt-4"
        >
          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Type
            </span>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter Type"
              className="flex justify-center items-center rounded-lg w-2/3 h-16 text-center outline-none"
            />
          </div>

          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Subject
            </span>
            <div className="flex items-center  py-4 gap-y-4 gap-x-1 flex-row w-2/3 bg-white rounded-lg flex-wrap justify-evenly px-6">
              {subject.map((element, index) =>
                typeof element === "string" ? (
                  <input
                    key={index}
                    type="text"
                    placeholder="Text"
                    className="flex flex-start w-1/4 h-12 items-center bg-gray-300 outline-none text-center rounded"
                    value={element}
                    onChange={(e) =>
                      onChangeSubjectElement(e.target.value, index)
                    }
                  />
                ) : (
                  <div className="flex flex-start w-1/4 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                    {placeholders[element]}
                  </div>
                )
              )}

              <select
                value=""
                onChange={(e) => selectInDropdown(e.target.value)}
                className="outline-none w-1/4 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
              >
                <option disabled value="">
                  Select
                </option>
                <option value={""}>Text</option>
                <option value={1}>Company Name</option>
                <option value={2}>Company Address</option>
                <option value={3}>Company Phone</option>
              </select>
            </div>
          </div>
        </form>

        <div className="flex w-full justify-end items-center mr-64">
          <div className="flex justify-center h-12 w-28 bg-nota-lightblue rounded-full font-markazi-text text-xl font-bold mt-14 mb-10 ">
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCreation;
