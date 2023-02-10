/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
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

  const labelQuery = useQuery({
    queryKey: ["label", id],
    queryFn: async () => {
      return api.updateFoundLabelDetails({
        id: id as string,
      });
    },
    onSuccess: () => {},
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
        <Text variant="title">Login to Trackwyse</Text>
        <Input
          containerClassName="mt-4"
          placeholder="Email address"
          disabled={modifyLabelMutation.isLoading}
          // error={labelForm.errors.email}
          // value={labelForm.values.email}
          onChange={labelForm.handleChange("email")}
        />

        <Button type="submit" className="mt-4 w-full" loading={modifyLabelMutation.isLoading}>
          Login to Trackwyse
        </Button>
      </form>
    </div>
  );
};

export default FoundLabel;
