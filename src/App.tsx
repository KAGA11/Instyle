import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Description from './Components/Description';
import desc from './assets/desc/assets'
import Footer from './Components/Footer';
import { descClothing, descProcessing } from './attribute';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Description 
        title='Our Processing Capabilities'
        descList={[
          desc.desc1,
          desc.desc2,
          desc.desc3,
        ]}
        header={descProcessing.header}
        body={descProcessing.body}
      />

      <Description 
        title='Featured Clothing Items'
        descList={[
          desc.desc4,
          desc.desc5,
          desc.desc6,
        ]}
        header={descClothing.header}
        body={descClothing.body}
      />


      <Footer />
    </>
  );
};

export default App;