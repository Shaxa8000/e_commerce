import React from 'react';
import { Wrap, Header, Container } from '../Comments/style';
import Img from '../../assets/images/image.png';

export default function index() {
  return (
    <Wrap>
      <Header>what our customers say</Header>
          <Container>
              <Container.Text>
                  <img src={Img} alt="" />
          <Container.Text1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos similique id impedit molestiae, nam, alias sint,
            reprehenderit ratione quo error neque officia! Vero, excepturi
            laborum numquam, saepe et voluptate maiores vel dolorum repellendus
            inventore nobis animi exercitationem mollitia corporis voluptatum
            quae similique quaerat, veniam quia odio eius dolorem ut expedita.
                  </Container.Text1>
                  <Container.Text2>
                      Angelina Joly
                  </Container.Text2>
                  <Container.Text1>
                      Co-founder
                  </Container.Text1>
              </Container.Text>
      </Container>
    </Wrap>
  );
}
