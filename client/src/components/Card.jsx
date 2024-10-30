import React from "react";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="border rounded card-hover-effect  p-4">
      <div className="card-title-wrapper d-flex mb-3">
        <div className="col-2  justify-content-sm-center icon">
          {/* for icons */}
          {icon}
        </div>
        <div className="col-10 justify-content-sm-center  title">
          <h4 className="fw-bold fs-4">{title}</h4>
        </div>
      </div>
      <p className="text-secondary">{desc}</p>
    </div>
  );
};

export default Card;
