import React from 'react';
import { Wrap, Heading, Subheading, Img, ImgWrap, Container } from './style';
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
      <Heading>OUR PRODUCTS</Heading>
      <Subheading>
        <Subheading.Heading>All Products</Subheading.Heading>
        <Subheading.Heading>Best Sellers</Subheading.Heading>
        <Subheading.Heading>New Arrivals</Subheading.Heading>
        <Subheading.Heading>Todays Deals</Subheading.Heading>
      </Subheading>
      <Img>
        <Container>
          <ImgWrap>
            <img src={Img1} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Minimal LCD chair</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img2} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Modern Sofa</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img3} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Microfiber Sofa</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img4} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Wood Sofa</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
        </Container>
        <Container>
          <ImgWrap>
            <img src={Img5} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Amalia Bench</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img6} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Acacia Wood Chair</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img7} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Juno Hinged Chair</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
          <ImgWrap>
            <img src={Img1} alt='' />
            <ImgWrap.Text1>Chair</ImgWrap.Text1>
            <ImgWrap.Text2>Delicia 3 chair</ImgWrap.Text2>
            <ImgWrap.Text3>180$ 250$</ImgWrap.Text3>
          </ImgWrap>
        </Container>
      </Img>
    </Wrap>
  );
}
