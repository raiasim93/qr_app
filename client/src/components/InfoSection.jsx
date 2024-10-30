import React from "react";
import faqData from "./FaqData";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <>
      <section className="g-0 bg-light md-padding">
        <div className="row">
          {faqData.map((data, index) => (
            <div index={index} className="col-6 ">
                <InfoCard
                title={data.title}
                body={data.body}
                 />
            </div>
          ))}
          ;
        </div>
      </section>
    </>
  );
};

export default InfoSection;
