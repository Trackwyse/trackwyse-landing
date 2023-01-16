/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import cn from "classnames";
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
        <div
          className={cn(
            "inline-flex flex-col justify-center gap-y-8",
            "lg:items-start lg:text-left",
            "items-center text-center"
          )}
        >
          <Text variant="header">The Easy Way to Keep Track of Your Belongings</Text>
          <Text variant="subtitle" className="w-2/3">
            Effortless possession tracking with our advanced mobile app and QR code labels.
          </Text>
          <Button>Get Started</Button>
        </div>
        <div className={cn("lg:justify-end", "flex justify-center")}>
          <Carousel images={Content.CarouselImages} />
        </div>
      </Container>
    </>
  );
};

export default Home;
