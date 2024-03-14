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

import { useState, useEffect } from "react";

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

  useEffect(() => {}, [subject]);

  const placeholders = {
    1: "Company Name",
    2: "Company Address",
    3: "Company Phone",
  };

  const convertCompoundInputToSentence = (compound) => {
    let sentence = "";
    compound.map((part) => {
      if (typeof part === "string") {
        sentence += part;
      } else if (typeof part === "number") {
        sentence += " " + placeholders[part] + " ";
      }
    });
    return sentence;
  };

  const onChangeSubjectElement = (text, index) => {
    const newSubject = [...subject];
    newSubject[index] = text;
    setSubject(newSubject);
  };
  const onChangeTitleElement = (text, index) => {
    const newTitle = [...title];
    newTitle[index] = text;
    setTitle(newTitle);
  };
  const onChangeSubtitleElement = (text, index) => {
    const newSubtitle = [...subtitle];
    newSubtitle[index] = text;
    setSubtitle(newSubtitle);
  };
  const onChangePreviewElement = (text, index) => {
    const newPreview = [...preview];
    newPreview[index] = text;
    setPreview(newPreview);
  };

  const onChangeUpperBody = (text, element_index, item_index) => {
    const newParaBody = [...upper[item_index][1]];
    newParaBody[element_index] = text;
    handleBodyChange(item_index, newParaBody);
  };

  const selectInSubjectDropdown = (value) => {
    if (value === "") {
      setSubject([...subject, value]);
    } else if (value === null) {
      return;
    } else {
      setSubject([...subject, parseInt(value)]);
    }
  };
  const selectInTitleDropdown = (value) => {
    if (value === "") {
      setTitle([...title, value]);
    } else if (value === null) {
      return;
    } else {
      setTitle([...title, parseInt(value)]);
    }
  };
  const selectInSubtitleDropdown = (value) => {
    if (value === "") {
      setSubtitle([...subtitle, value]);
    } else if (value === null) {
      return;
    } else {
      setSubtitle([...subtitle, parseInt(value)]);
    }
  };
  const selectInPreviewDropdown = (value) => {
    if (value === "") {
      setPreview([...preview, value]);
    } else if (value === null) {
      return;
    } else {
      setPreview([...preview, parseInt(value)]);
    }
  };

  const handleHeadingChange = (index, value) => {
    const updatedUpperBody = [...upper];
    updatedUpperBody[index][0] = value;
    setUpper(updatedUpperBody);
  };

  const handleBodyChange = (index, value) => {
    const updatedUpperBody = [...upper];
    updatedUpperBody[index][1] = value;
    setUpper(updatedUpperBody);
  };

  const addHeadingBodyPair = (e) => {
    e.preventDefault();
    setUpper([...upper, { heading: "", body: [] }]);
  };

  const deleteHeadingBodyPair = (e, index) => {
    e.preventDefault();
    const updatedUpperBody = upper.filter((_, idx) => idx !== index);
    setUpper(updatedUpperBody);
  };

  return (
    <div className="flex justify-center w-full my-12">
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
            <div className="flex py-3 flex-row w-2/3 gap-y-4 gap-x-1 bg-white rounded-lg flex-wrap px-3">
              {subject.map((element, index) =>
                typeof element === "string" ? (
                  <input
                    key={index}
                    type="text"
                    placeholder="Text"
                    className={`flex flex-start px-3 h-12 items-center bg-gray-300 outline-none text-center rounded`}
                    style={{
                      width: `${
                        element.length > 15 ? (element.length + 2) * 10 : 170
                      }px`,
                    }}
                    value={element}
                    onChange={(e) =>
                      onChangeSubjectElement(e.target.value, index)
                    }
                  />
                ) : (
                  <div className="flex flex-start flex-1 min-w-36 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                    {placeholders[element]}
                  </div>
                )
              )}

              <select
                value=""
                onChange={(e) => selectInSubjectDropdown(e.target.value)}
                className="outline-none flex-1 min-w-36 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
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

          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Title
            </span>
            <div className="flex py-3 flex-row w-2/3 gap-y-4 gap-x-1 bg-white rounded-lg flex-wrap px-3">
              {title.map((element, index) =>
                typeof element === "string" ? (
                  <input
                    key={index}
                    type="text"
                    placeholder="Text"
                    className={`flex flex-start px-3 h-12 items-center bg-gray-300 outline-none text-center rounded`}
                    style={{
                      width: `${
                        element.length > 15 ? (element.length + 2) * 10 : 170
                      }px`,
                    }}
                    value={element}
                    onChange={(e) =>
                      onChangeTitleElement(e.target.value, index)
                    }
                  />
                ) : (
                  <div className="flex flex-start flex-1 min-w-36 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                    {placeholders[element]}
                  </div>
                )
              )}

              <select
                value=""
                onChange={(e) => selectInTitleDropdown(e.target.value)}
                className="outline-none flex-1 min-w-36 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
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
          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Subtitle
            </span>
            <div className="flex py-3 flex-row w-2/3 gap-y-4 gap-x-1 bg-white rounded-lg flex-wrap px-3">
              {subtitle.map((element, index) =>
                typeof element === "string" ? (
                  <input
                    key={index}
                    type="text"
                    placeholder="Text"
                    className={`flex flex-start px-3 h-12 items-center bg-gray-300 outline-none text-center rounded`}
                    style={{
                      width: `${
                        element.length > 15 ? (element.length + 2) * 10 : 170
                      }px`,
                    }}
                    value={element}
                    onChange={(e) =>
                      onChangeSubtitleElement(e.target.value, index)
                    }
                  />
                ) : (
                  <div className="flex flex-start flex-1 min-w-36 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                    {placeholders[element]}
                  </div>
                )
              )}

              <select
                value=""
                onChange={(e) => selectInSubtitleDropdown(e.target.value)}
                className="outline-none flex-1 min-w-36 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
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

          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Preview
            </span>
            <div className="flex py-3 flex-row w-2/3 gap-y-4 gap-x-1 bg-white rounded-lg flex-wrap px-3">
              {preview.map((element, index) =>
                typeof element === "string" ? (
                  <input
                    key={index}
                    type="text"
                    placeholder="Text"
                    className={`flex flex-start px-3 h-12 items-center bg-gray-300 outline-none text-center rounded`}
                    style={{
                      width: `${
                        element.length > 15 ? (element.length + 2) * 10 : 170
                      }px`,
                    }}
                    value={element}
                    onChange={(e) =>
                      onChangePreviewElement(e.target.value, index)
                    }
                  />
                ) : (
                  <div className="flex flex-start flex-1 min-w-36 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                    {placeholders[element]}
                  </div>
                )
              )}

              <select
                value=""
                onChange={(e) => selectInPreviewDropdown(e.target.value)}
                className="outline-none flex-1 min-w-36 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
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

          <div className="flex flex-row w-full justify-center items-center gap-x-10">
            <span className="font-markazi-text text-2xl font-bold w-[100px]">
              Above Email Body
            </span>
            <input
              type="text"
              value={type}
              onChange={(e) => setAboveEmailBody(e.target.value)}
              placeholder="Enter Text"
              className="flex justify-center items-center rounded-lg w-2/3 h-16 text-center outline-none"
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center  mt-12">
            <div className="flex flex-col w-full justify-center items-center gap-y-10">
              <span className="font-markazi-text text-3xl font-bold underline">
                Upper Body
              </span>
              <button
                className="rounded-full font-markazi-text text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                onClick={addHeadingBodyPair}
              >
                Add Heading & Body
              </button>
              {upper.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full justify-center items-center gap-y-5 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: 1 }}
                >
                  <input
                    type="text"
                    value={item[0]}
                    onChange={(e) => handleHeadingChange(index, e.target.value)}
                    placeholder="Heading"
                    className="flex justify-center items-center rounded-lg w-2/3 h-16 text-center outline-none"
                  />

                  <div className="flex py-3 flex-row w-2/3 gap-y-4 gap-x-1 bg-white rounded-lg flex-wrap px-3">
                    {item[1].map((element, elementIndex) =>
                      typeof element === "string" ? (
                        <input
                          key={elementIndex}
                          type="text"
                          placeholder="Text"
                          className={`flex flex-start px-3 h-12 items-center bg-gray-300 outline-none text-center rounded`}
                          style={{
                            width: `${
                              element.length > 15
                                ? (element.length + 2) * 10
                                : 170
                            }px`,
                          }}
                          value={element}
                          onChange={(e) =>
                            onChangeUpperBody(
                              e.target.value,
                              elementIndex,
                              index
                            )
                          }
                        />
                      ) : (
                        <div className="flex flex-start flex-1 min-w-36 h-12 items-center bg-nota-peach outline-none text-center rounded justify-center items-center text-nota-black">
                          {placeholders[element]}
                        </div>
                      )
                    )}
                    {/* TODO */}
                    <select
                      value=""
                      onChange={(e) => selectInPreviewDropdown(e.target.value)}
                      className="outline-none flex-1 min-w-36 bg-gray-300 h-12 rounded pl-1 cursor-pointer"
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

                  <button
                    className="rounded-full font-markazi-text text-xl bg-red-500 hover:bg-red-700 text-white font-bold py-2  px-3 "
                    onClick={(e) => deleteHeadingBodyPair(e, index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
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
