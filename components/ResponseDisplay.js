// file: /components/ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({ data, error, loading }) => {
  console.log("data in ResponseDisplay", data);
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    if (data.result.instructions && Array.isArray(data.result.instructions)) {
      content = (
        <>
          <p>Name: {data.result.subject}</p>
          <p>Question: {data.result.question}</p>
          <p>Answer: {data.result.answer}</p>
          <p>Instructions:</p>
          <ol>
            {data.result.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      );
    } else {
      content = (
        <>
          <p>Name: {data.result.subject}</p>
          <p>Question: {data.result.question}</p>
          <p>Answer: {data.result.answer}</p>
        </>
      );
    }
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
