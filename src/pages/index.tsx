/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import { mockupLanding, mockupMaps, mockupModify } from "@/assets";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div></div>
        <div className="flex justify-end">
          <Carousel images={[mockupLanding, mockupMaps, mockupModify]} />
        </div>
      </Container>
    </>
  );
};

export default Home;
