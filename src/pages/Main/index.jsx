import React from 'react';
import Navbar from '../../Components/Navbar';
import SubNav from '../SubNav';
import Sidebar from '../Sidebar';
import Banner from '../Banner';
import { Container } from './style';
import Contacts from '../Contacts';
import Collection from '../Collection';
import Trending from '../Trending';
import Offers from '../Offers';
import Products from '../Products';
import Comments from '../Comments';
import Articles from '../Articles';
import Footer from '../Footer';

export default function index() {
  return (
    <div>
      <Navbar />
      <SubNav />
      <Container>
        <Sidebar />
        <Banner />
      </Container>
      <Contacts />
      <Collection />
          <Trending />
          <Offers />
          <Products />
      <Comments />
      <Articles />
      <Footer/>
    </div>
  );
}
