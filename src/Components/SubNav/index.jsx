import React, { Component } from 'react';
import { Wrapper, MenuIcon, Title } from './style';

export default class index extends Component {
  render() {
    return (
      <Wrapper>
          <MenuIcon />
        <Title.Wrap>
          <Title>Home</Title>
          <Title>Shop</Title>
          <Title>Blog</Title>
          <Title>About</Title>
          <Title>Contact Us</Title>
        </Title.Wrap>
      </Wrapper>
    );
  }
}
