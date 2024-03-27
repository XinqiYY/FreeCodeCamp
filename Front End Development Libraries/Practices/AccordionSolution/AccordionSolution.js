import React, { useState } from 'react';
import './styles.css'; 

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-section" onClick={toggleAccordion}>
        <div className="accordion-title">
          {title}
          <span className={isOpen ? 'accordion-icon accordion-icon--rotated' : 'accordion-icon'}></span>
        </div>
        
        <hr />

        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
}

export default function Accordion() {
  const items = [
    {title: 'HTML', content:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."},
    {title: 'CSS', content:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."},
    {title: 'JavaScript', content:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."}
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
