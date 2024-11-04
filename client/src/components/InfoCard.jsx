import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const InfoCard = ({ title, body, onToggle }) => {
  return (
    <Accordion  className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={onToggle} className="text-main-color">
          {title}
        </Accordion.Header>
        <Accordion.Body className="text-secondary">
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default InfoCard;
