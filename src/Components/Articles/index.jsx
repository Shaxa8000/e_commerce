import React from 'react';
import { Wrap, Container, Img, TextWrap } from './style';

export default function index() {
    return (
      <>
        <Wrap>
          <Wrap.Header>our latest articles</Wrap.Header>
          <Container>
            <Img>
              <TextWrap>
                <TextWrap.Text1>23-December 2022</TextWrap.Text1>
                <TextWrap.Text2>
                  Beginner guide to buying minimal Sofa
                </TextWrap.Text2>
                <TextWrap.Text3>Read More</TextWrap.Text3>
              </TextWrap>
            </Img>
            <Img.Second>
              <TextWrap>
                <TextWrap.Text1>23-December 2022</TextWrap.Text1>
                <TextWrap.Text2>
                  Buying the best minimal computer table
                </TextWrap.Text2>
                <TextWrap.Text3>Read More</TextWrap.Text3>
              </TextWrap>
            </Img.Second>
          </Container>
        </Wrap>
        <Wrap>
          <Container>
            <Img>
              <TextWrap>
                <TextWrap.Text1>23-December 2022</TextWrap.Text1>
                <TextWrap.Text2>
                  Beginner guide to buying minimal Sofa
                </TextWrap.Text2>
                <TextWrap.Text3>Read More</TextWrap.Text3>
              </TextWrap>
            </Img>
            <Img.Second>
              <TextWrap>
                <TextWrap.Text1>23-December 2022</TextWrap.Text1>
                <TextWrap.Text2>
                  Buying the best minimal computer table
                </TextWrap.Text2>
                <TextWrap.Text3>Read More</TextWrap.Text3>
              </TextWrap>
            </Img.Second>
          </Container>
        </Wrap>
      </>
    );
}
