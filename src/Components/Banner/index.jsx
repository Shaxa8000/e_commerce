import React, {useState} from 'react';
import { Wrapper } from './style';
import Data from './mock/data';

const Shaxboz = () => {
  const [state, setState] = useState(0)

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Text>Top Collections 2022</Wrapper.Text>
        <Wrapper.Info>We Serve Your Dream Furniture</Wrapper.Info>
        <Wrapper.Discount>Get 50% off all products</Wrapper.Discount>
        <Wrapper.Button>SHOP NOW</Wrapper.Button>
      </Wrapper.Container>
      <Wrapper.Sofa>
        <img src={Data[state]} alt='' style={{width: '354', cursor:'pointer'}} />
      </Wrapper.Sofa>
      <Wrapper.Furniture onClick={()=> setState(1)} style={{cursor:'pointer' }}>
        <img  src={Data[1]} alt='' style={{ backgroundColor: 'white' }}/>
        <img src={Data[2]} alt='' style={{ backgroundColor: 'white' }} />
        <img src={Data[3]} alt='' style={{ backgroundColor: 'white' }} />
      </Wrapper.Furniture>
    </Wrapper>
  );
};

export default Shaxboz;