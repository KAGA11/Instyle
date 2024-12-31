import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import demo from '../assets/demo.jpg';

// 自定义图片样式
const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

// 自定义箭头样式
const CustomArrow = styled.div`
  .slick-prev,
  .slick-next {
    color: black; // 箭头颜色改为黑色
    font-size: 24px;
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: #333; // 悬停时颜色加深
  }

  .slick-prev {
    left: 10px; // 左箭头位置
  }

  .slick-next {
    right: 10px; // 右箭头位置
  }
`;

const App: React.FC = () => (
  <CustomArrow>
    <Carousel arrows infinite={true}>
      <div>
        <Img src={demo} alt="Demo" />
      </div>
      <div>
        <Img src={demo} alt="Demo" />
      </div>
      <div>
        <Img src={demo} alt="Demo" />
      </div>
      <div>
        <Img src={demo} alt="Demo" />
      </div>
    </Carousel>
  </CustomArrow>
);

export default App;