import styled from 'styled-components';

export const Wrap = styled.div`
display: flex;
width: 100%;
column-gap: 120px;
`

Wrap.Text1 = styled.div`
display: flex;
flex-direction: column;
width: 318px;
height: 96px;
`

Wrap.Head = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  margin-top: 50px;
  margin-left: 30px;
`;

Wrap.Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */
 margin-top: 20px;
  color: #555555;
`;

Wrap.Text2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
`;

Wrap.Txt = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  /* or 222% */

  letter-spacing: 0.01em;

  color: #555555;
  width: 167px;
  height: 200px;
`;


