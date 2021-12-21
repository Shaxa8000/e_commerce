import React, { Component } from 'react';
import { Wrapper } from './style';

export default function index(){
    return (
        <Wrapper>
        <Wrapper.Box1 />
        <Wrapper.Text>
          Free shipping
        </Wrapper.Text>
        <Wrapper.Box2 />
        <Wrapper.Text>
          Smart GiftCard
        </Wrapper.Text>
        <Wrapper.Box3 />
        <Wrapper.Text>
          Quick Payment
        </Wrapper.Text>
        <Wrapper.Box4 />
        <Wrapper.Text>
          24/7 Support
        </Wrapper.Text>
      </Wrapper>
    );
}
