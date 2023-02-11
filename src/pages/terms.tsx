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

interface TermsOfServiceProps {
  data: TermsOfServiceCMSResponse;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ data }) => {
  const { title, content } = data.data.attributes;

  return (
    <>
      <Head>
        <title>Trackwyse - Terms of Service</title>
      </Head>

      <Navbar />
      <Container className="my-24" includeCols={false}>
        <Text variant="header">{title}</Text>
        <Text className="mt-16 whitespace-pre-line">{content}</Text>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await CMS.getTermsOfService();

  return {
    props: {
      data: response.data,
    },
  };
};

export default TermsOfService;
