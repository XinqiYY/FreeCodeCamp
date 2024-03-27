import React, { useState } from 'react';

const style = {
  color: 'blue',
}

export default function Tabs() {
  const texts = [
    "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  ];

  const [index, setIndex] = useState(1);

  return (
    <div>
      <div>
        <button style={index === 1 ? style : null} onClick={() => setIndex(1)}>HTML</button>
        <button style={index === 2 ? style : null} onClick={() => setIndex(2)}>CSS</button>
        <button style={index === 3 ? style : null} onClick={() => setIndex(3)}>JavaScript</button>
      </div>
      <div>
        {texts[index - 1]}
      </div>
    </div>
  );
}
