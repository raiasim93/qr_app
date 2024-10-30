import React from 'react';
import Card from './Card';
import advantagesData from './Advantages';

const FeaturesSection = () => {
  return (<>
     <section className="g-0  bg-light lg-padding">
      <div className="container">
        <div className="row justify-content-center g-3 g-lg-3">
          {advantagesData.map((feature, index) => (
            <div key={index} className="col-12 col-lg-4 d-flex">
              <Card
                icon={<feature.icon />}
                title={feature.title}
                desc={feature.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    
  </>
    
  
  );
};

export default FeaturesSection;



 

