/*
 * Created on Mon Jan 16 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import Head from "next/head";
import { GetStaticProps } from "next";

import CMS from "@/api/content";
import Text from "@/components/Text";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

interface AboutProps {
  data: AboutCMSResponse;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const { title, content } = data.data.attributes;

  return (
    <>
      <Head>
        <title>Trackwyse - About</title>
      </Head>

      <Navbar />
      <Container className="mt-24" includeCols={false}>
        <Text variant="header">{title}</Text>
        <Text className="mt-16 whitespace-pre-line">{content}</Text>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await CMS.getAbout();

  return {
    props: {
      data: response.data,
    },
  };
};

export default About;
