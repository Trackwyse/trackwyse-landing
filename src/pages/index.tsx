/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import Head from "next/head";

import Content from "@/lib/content";
import Text from "@/components/Text";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Container from "@/components/Container";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Trackwyse</title>
      </Head>

      <Navbar />
      <Container className="mt-24">
        <div className="inline-flex flex-col justify-center gap-y-8">
          <Text variant="header">The Easy Way to Keep Track of Your Belongings</Text>
          <Text variant="subtitle" className="w-2/3">
            Effortless possession tracking with our advanced mobile app and QR code labels.
          </Text>
          <Button className=" self-start">Get Started</Button>
        </div>
        <div className="flex justify-end">
          <Carousel images={Content.CarouselImages} />
        </div>
      </Container>
    </>
  );
};

export default Home;
