import { useState } from "react";
import "../scss/age.scss";

const Age = ({days, months, years}) => {
 
  return (
    <>
      <div className="contentAge">
        <span>
          <span className="age">{years}</span>
          <span className="title">{"years"}</span>
        </span>
        <span>
          <span className="age">{months}</span>
          <span className="title">{"months"}</span>
        </span>
        <span>
          <span className="age">{days}</span>
          <span className="title">{"days"}</span>
        </span>
      </div>
    </>
  );
};

export default Age;
