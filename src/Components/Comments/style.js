import styled from 'styled-components';

export const Wrap = styled.div`

`;

export const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  color: #555555;
  text-align: center;
  margin-top: 70px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  box-sizing: border-box;
  margin-bottom: 70px;
`;

Container.Text = styled.div`
width: 816px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  height: 312px;
  background: #f8fafb;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

Container.Text1 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  width: 566px;
  height: 96px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #515151;
`;

Container.Text2 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #555555;
  padding-top: 40px;
`;