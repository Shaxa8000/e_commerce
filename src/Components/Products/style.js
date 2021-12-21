import styled from 'styled-components';


export const Wrap = styled.div`

`

export const Heading = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #555555;
  text-align: center;
  margin-bottom: 30px;
`;

export const Subheading = styled.div`
display: flex;
justify-content: center;
column-gap: 50px;
`

Subheading.Heading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #c2c2c2;
  margin-bottom: 60px;
`;

export const Img = styled.div`
display: flex;
flex-wrap: wrap;
`
export const Container = styled.div`
display: flex;
column-gap: 47px;
margin-bottom: 30px;
`

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

ImgWrap.Text1 = styled.div`
  font-style: normal;
  font-weight: normal;
  margin-top: 15px;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: rgba(117, 117, 117, 0.71);
`;

ImgWrap.Text2 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  color: #11142d;
  margin-top: 5px;
`;

ImgWrap.Text3 = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #7ac751;
  margin-top: 5px;
`;

