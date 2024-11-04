import React, { useState } from "react";
import faqData from "./FaqData";
import InfoCard from "./InfoCard";

const FaqSection = () => {
  // Split faqData into odd and even arrays
  const oddData = faqData.filter((_, index) => index % 2 === 0); // 0, 2, 4...
  const evenData = faqData.filter((_, index) => index % 2 !== 0); // 1, 3, 5...

  // State to track active item for each column separately
  const [activeOddIndex, setActiveOddIndex] = useState(null);
  const [activeEvenIndex, setActiveEvenIndex] = useState(null);

  return (
    <section className="g-0 bg-light md-padding">
    <div className="row">
      {/* Odd items column */}
      <div className="col-12 col-md-6 ">
        {oddData.map((data, index) => (
          <InfoCard
            key={`odd-${index}`}
            title={data.title}
            body={data.body}
            isActive={activeOddIndex === index} // Track active state for odd column
            // onToggle={() => setActiveOddIndex(activeOddIndex === index ? null : index)}
          />
        ))}
      </div>
      
      {/* Even items column */}
      <div className="col-12 col-md-6 ">
        {evenData.map((data, index) => (
          <InfoCard
            key={`even-${index}`}
            title={data.title}
            body={data.body}
            isActive={activeEvenIndex === index} // Track active state for even column
            // onToggle={() => setActiveEvenIndex(activeEvenIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default FaqSection;
