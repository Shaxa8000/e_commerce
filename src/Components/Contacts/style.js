import styled from 'styled-components';
import { ReactComponent as Box1 } from '../../assets/icons/box1.svg';
import { ReactComponent as Box2 } from '../../assets/icons/box2.svg';
import { ReactComponent as Box3 } from '../../assets/icons/box3.svg';
import { ReactComponent as Box4 } from '../../assets/icons/box4.svg';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 70px;
  column-gap: 76px;
`;

Wrapper.Box1 = styled(Box1)``;
Wrapper.Box2 = styled(Box2)``;
Wrapper.Box3 = styled(Box3)``;
Wrapper.Box4 = styled(Box4)``;


Wrapper.Content = styled.div`
display: flex;
flex-direction: column;
`

Wrapper.Text = styled.div`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;

  /* Primary */

  color: #555555;
`;

Wrapper.Cost = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  display: flex;
  align-items: center;

  /* Black 2nd */

  color: rgba(81, 81, 81, 0.71);
`;
