import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/icons/collections.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 67px;
  width: 100%;
  background: #f7f8fa;
`;


export const MenuIcon = styled(Menu)``;

export const Title = styled.button`
  font-weight: normal;
  font-size: 18px;
  line-height: 17px;
  border: none;
  background: #f7f8fa;
`;

Title.Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 55%;
`;
