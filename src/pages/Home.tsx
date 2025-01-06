import React from "react";
import Carousel from "../Components/Carousel";
import Description from "../Components/Description";
import desc from "../assets/desc/desc";
import { descClothing, descProcessing } from "../attribute";

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <Description
        title="Our Processing Capabilities"
        descList={[desc.desc1, desc.desc2, desc.desc3]}
        header={descProcessing.header}
        body={descProcessing.body}
      />

      <Description
        title="Featured Clothing Items"
        descList={[desc.desc4, desc.desc5, desc.desc6]}
        header={descClothing.header}
        body={descClothing.body}
      />

    </>
  );
};

export default Home;
