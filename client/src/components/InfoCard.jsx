import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const InfoCard = ({title,body}) => {
  return (
    <>
    <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="text-main-color">{title}</Accordion.Header>
                <Accordion.Body className="text-secondary">
                    {body}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    </>
  )
}

export default InfoCard