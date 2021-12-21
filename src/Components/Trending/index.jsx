import React from 'react';
import { Wrap, Heading, SubHeading, Imgcontainer } from './style';
import Img from '../../assets/images/container.png';
import Img1 from '../../assets/images/container (1).png';
import Img2 from '../../assets/images/container (2).png';
import Img3 from '../../assets/images/container (3).png';
import Img4 from '../../assets/images/container (4).png';
import Img5 from '../../assets/images/container (5).png';
import Img6 from '../../assets/images/container (6).png';
import Img7 from '../../assets/images/container (7).png';


export default function index() {
    return (
      <Wrap>
        <Heading>TRENDING</Heading>
        <SubHeading>
          <SubHeading.H1>Top Products</SubHeading.H1>
          <SubHeading.H1>New Arrivals</SubHeading.H1>
          <SubHeading.H1>Best Sellers</SubHeading.H1>
        </SubHeading>
        <Imgcontainer>
            <img src={Img} alt='' />
            <img src={Img1} alt='' />
            <img src={Img2} alt='' />
            <img src={Img3} alt='' />
            <img src={Img4} alt='' />
            <img src={Img5} alt='' />
            <img src={Img6} alt='' />
            <img src={Img7} alt='' />
        </Imgcontainer>
      </Wrap>
    );
}
