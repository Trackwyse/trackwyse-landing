/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";

import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";
import api from "@/api";

const FoundLabel: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [label, setLabel] = useState<Label>({} as Label);

  const labelQuery = useQuery({
    queryKey: ["label", id],
    queryFn: async () => {
      return api.updateFoundLabelDetails({
        id: id as string,
      });
    },
    onSuccess: ({ data }) => {
      setLabel(data.label);
    },
    onError: () => {},
  });

  const modifyLabelMutation = useMutation({
    mutationFn: async (values: FoundLabelDetailsInput) => {
      return api.updateFoundLabelDetails(values);
    },
  });

  const labelForm = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });

  if (labelQuery.isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen w-full justify-center">
      <form className="w-96" onSubmit={labelForm.handleSubmit}>
        <Image src="/logo.svg" alt="Trackwyse Logo" width={181.88} height={48} className="my-20" />
        <Text variant="title" className="my-4">
          Label Details
        </Text>
        <Text variant="subtitle">
          Thank you for finding this label. The owner has been notified and has provided the
          following information
        </Text>
        <Input disabled containerClassName="mt-4" placeholder="Email address" />

        <Button type="submit" className="mt-4 w-full" loading={modifyLabelMutation.isLoading}>
          Login to Trackwyse
        </Button>
      </form>
    </div>
  );
};

export default FoundLabel;
