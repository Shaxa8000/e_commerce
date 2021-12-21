import styled from 'styled-components';
import card from '../../assets/images/card.png';
import card1 from '../../assets/images/card1.png';

export const Wrap = styled.div`
margin-bottom: 70px;;
`

Wrap.Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: #555555;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Container = styled.div`
display: flex;
width: 1270px;
height: auto;
column-gap: 30px;

`

export const Img = styled.div`
background-size: 100% 100%;
width:620px;
height:455px;
background-image: url(${card});
margin-bottom: 0;
`;

Img.Second = styled.div`
width: 630px;
height: 455px;
background-image: url(${card1});
background-repeat: no-repeat;
margin-bottom: 0;
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

TextWrap.Text1 = styled.div`
  
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  letter-spacing: 0.008em;
  /* Light/Text Link Color/White */
  color: #ffffff;
  margin-top: 100px;
`;

TextWrap.Text2 = styled.div`
  font-style: normal;
  font-weight: bold;
  width: 490.1px;
  height: 75.88px;
  font-size: 39px;
  line-height: 120%;
  color: #ffffff;
`;

TextWrap.Text3 = styled.div`
  font-style: normal;
  margin-top: 50px;
  margin-right: 50px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  letter-spacing: 0.008em;

  /* Light/Text Link Color/White */

  color: #ffffff;
`;

