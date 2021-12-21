import React from 'react';
import { Wrapper } from './style';

export default function index() {
    return (
      <Wrapper>
        <Wrapper.Logo>
          <Wrapper.LogoIcon /> FURNIKING
        </Wrapper.Logo>
        <Wrapper.Input/>
        <Wrapper.Select>
          <option value=''>Category</option>
          <option value=''>Category</option>
          <option value=''>Category</option>
          <option value=''>Category</option>
        </Wrapper.Select>
        <Wrapper.IconContainer>
          <Wrapper.Case />
          <Wrapper.Bell />
          <Wrapper.User />
        </Wrapper.IconContainer>
      </Wrapper>
    );
}
