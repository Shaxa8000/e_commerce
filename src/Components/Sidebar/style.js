import styled from 'styled-components';

export const Wrapper = styled.div`
width: 260px;
height: 440px;
background: #F7F8FA;
`;

Wrapper.Item = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 0.02em;

  color: #555555;

  box-sizing: border-box;
  padding: 8px 0px 8px 30px;
  border: 0.8px solid #e3e3e3;
  height: 40px;
  width: 100%;
  border-bottom: ${({ border }) => border === 'true' && 'none'};
`;
