import styled from 'styled-components';
import big from '../../assets/images/photo1.png';
import small1 from '../../assets/images/photo2.png';
import small2 from '../../assets/images/photo3.png';


export const Container = styled.div`
  display: flex;
  width: 1230.90px;
  height: 510px;
  margin-bottom: 120px;
`;

export const SmallWrap = styled.div`
display: flex;
flex-direction: column;
row-gap: 24px;
`

export const Img = styled.div`
background-image: url(${big});
background-size: 100% 100%;
width: 880px;
margin-right: 20px;
`

Img.Small1 = styled.div`
background-image: url(${small1});
width: 487px;
height: 248px;
`

Img.Small2 = styled.div`
background-image: url(${small2});
width: 487px;
height: 248px;
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;

`

TextWrap.Text1 = styled.div`
  box-sizing: border-box;
  margin: 35px 0px 0px 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #555555;
`;

TextWrap.Text2 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #7ac751;
  margin: 10px 0px 0px 40px;
`;

TextWrap.Text3 = styled.div`
  margin: 10px 0px 0px 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #757575;
`;



