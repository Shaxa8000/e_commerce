import React from 'react';
import { Wrapper, Heading, BgImageWrap, Img, TextWrap } from './style';

export default function index() {
  return (
    <Wrapper>
      <Heading>SPECIAL OFFER</Heading>
      <BgImageWrap>
        <Img>
          <TextWrap>
            <TextWrap.Text1>LIVING ROOM FURNITURE</TextWrap.Text1>
            <TextWrap.Text2>
              You don't have a chair? Are you ready to growth? Shop with us 40%
              discount
            </TextWrap.Text2>
            <TextWrap.Price>
              <TextWrap.Price1>150$</TextWrap.Price1>
              <TextWrap.Price2>250$</TextWrap.Price2>
              <TextWrap.Button>SHOP NOW</TextWrap.Button>
            </TextWrap.Price>
          </TextWrap>
        </Img>
        <Img.Img2>
          <TextWrap>
            <TextWrap.Text1>MODERN CHAIR</TextWrap.Text1>
            <TextWrap.Text2>
              You don't have a chair? Are you ready to growth? Shop with us 40%
              discount
            </TextWrap.Text2>
            <TextWrap.Price>
              <TextWrap.Price1>75$</TextWrap.Price1>
              <TextWrap.Price2>150$</TextWrap.Price2>
              <TextWrap.Button>SHOP NOW</TextWrap.Button>
            </TextWrap.Price>
          </TextWrap>
        </Img.Img2>
      </BgImageWrap>
    </Wrapper>
  );
}
