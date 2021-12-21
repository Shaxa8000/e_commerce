import React from 'react';
import { Container, Img,SmallWrap, TextWrap } from './style';

export default function index() {
    return (
      <Container>
        <Img>
          <TextWrap>
            <TextWrap.Text1>Modern Furniture Collections</TextWrap.Text1>
            <TextWrap.Text2>Starting from 500$</TextWrap.Text2>
            <TextWrap.Text3>Read More</TextWrap.Text3>
          </TextWrap>
        </Img>
        <SmallWrap>
          <Img.Small1>
            <TextWrap.Text1>Geometric Bookcase</TextWrap.Text1>
            <TextWrap.Text2>Up to 20% discount</TextWrap.Text2>
            <TextWrap.Text3>Read More</TextWrap.Text3>
          </Img.Small1>
          <Img.Small2>
            <TextWrap.Text1>Minimal Sofa Collections</TextWrap.Text1>
            <TextWrap.Text2>Sale Up to 40% discount</TextWrap.Text2>
            <TextWrap.Text3>Read More</TextWrap.Text3>
          </Img.Small2>
        </SmallWrap>
      </Container>
    );
}
