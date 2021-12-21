import styled from 'styled-components';
import img1 from '../../assets/images/rec1.png';
import img2 from '../../assets/images/rec2.png';


export const Wrapper = styled.div`

`

export const Heading = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: #555555;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BgImageWrap = styled.div`
display: flex;
column-gap: 25px;
width: 1257px;
height: 249px;
margin-bottom: 100px;
`

export const Img = styled.div`
background-image: url(${img1});
background-size: 100% 100%;
width: 600px;
height: 249px;
`

Img.Img2 = styled.div`
background-image: url(${img2});
// background-size: 100% 100%;
width: 600px;
height: 249px;
`


export const TextWrap = styled.div`
display: flex;
flex-direction: column;
`

TextWrap.Text1 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #555555;
  margin: 25px 0px 0px 25px;
`;

TextWrap.Text2 = styled.div`
  width: 200px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
  margin: 15px 0px 25px 25px;
`;


TextWrap.Price = styled.div`
display: flex;
`

TextWrap.Price1 = styled.div`
 margin-left: 25px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #7ac751;
`;

TextWrap.Price2 = styled.div`
  margin-left: 15px;
  margin-right: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #7ac751;
  text-decoration: line-through;
`;

TextWrap.Button = styled.button`
  width: 91px;
  color: #fff;
  height: 26px;
  background: #7ac751;
  border-radius: 2px;
  border: none;
`;