import React from "react";
import SlideImage from "./sub-components/SlideImageHomepage";

const SliderHome = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3" >
          <SlideImage />
        </div>
      </div>
    </>
  );
};

export default SliderHome;
