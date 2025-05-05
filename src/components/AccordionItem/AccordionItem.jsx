// import { Children } from "react";
import "./AccordionItem.css";
import Arrow from "../../assets/arrow.svg";
import { useRef, useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="Acc-wrapper">
      <div className="Acc-header" onClick={toggleAccordion}>
        <h3 className="Acc-title">{title}</h3>
        <img className={`Icon-arrow ${isOpen ? "rotate" : ""}`} src={Arrow} />
      </div>
      <div ref={contentRef} 
      className="Acc-content"
      style={{
        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px`: '0px'
      }}
      >
        <div className="Acc-content-inner">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
