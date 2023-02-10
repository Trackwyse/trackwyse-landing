/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { toast as Toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/api";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";
import TextArea from "@/components/TextArea";

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
    initialValues: {
      phoneNumber: label.finderPhoneNumber || "",
      recoveryLocation: {
        address1: label.foundRecoveryLocation?.address1 || "",
        address2: label.foundRecoveryLocation?.address2 || "",
        city: label.foundRecoveryLocation?.city || "",
        state: label.foundRecoveryLocation?.state || "",
        zip5: label.foundRecoveryLocation?.zip5 || "",
      },
      exactLocation: {
        address1: label.foundExactLocation?.address1 || "",
        address2: label.foundExactLocation?.address2 || "",
        city: label.foundExactLocation?.city || "",
        state: label.foundExactLocation?.state || "",
        zip5: label.foundExactLocation?.zip5 || "",
      },
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      modifyLabelMutation.mutate(
        {
          id: id as string,
          ...values,
        },
        {
          onSuccess: ({ data }) => {
            Toast.success("Label updated successfully");
            setLabel(data.label);
          },
          onError: (err) => {
            if (err instanceof AxiosError) {
              if (err?.response?.data?.message === "Invalid address") {
                labelForm.setErrors({
                  exactLocation: {
                    address1: "Invalid address",
                  },
                  recoveryLocation: {
                    address1: "Invalid address",
                  },
                });
              } else {
                Toast.error("An error occurred. Please try again later.");
              }
            } else {
              Toast.error("An error occurred. Please try again later.");
            }
          },
        }
      );
    },
  });

  if (labelQuery.isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen w-full justify-center pb-10">
      <form className="w-80 sm:w-96 md:w-[450px]">
        <Image src="/logo.svg" alt="Trackwyse Logo" width={181.88} height={48} className="my-20" />
        <Text variant="title" className="my-4">
          Label Details
        </Text>
        <Text variant="subtitle">
          Thank you for finding this label. The owner has been notified and has provided the
          following information
        </Text>

        <Input
          disabled
          containerClassName="mt-4"
          placeholder="Item Name"
          value={label?.name || "Not provided"}
        />
        <Input
          disabled
          containerClassName="mt-4"
          placeholder="Phone Number"
          value={label?.phoneNumber || "Not provided"}
        />
        <TextArea
          disabled
          containerClassName="mt-4"
          placeholder="Message"
          value={label?.message || "Not provided"}
        />

        <Text variant="title" className="mb-4 mt-8">
          Update Information
        </Text>
        <Text variant="subtitle">
          Would you like to provide your contact information to the owner? If so, please fill out
          the form below.
        </Text>

        <Input
          containerClassName="mt-4"
          placeholder="Phone Number"
          value={labelForm.values.phoneNumber}
          error={labelForm.errors.phoneNumber}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("phoneNumber")}
        />

        <Text variant="title" className="mt-4">
          Exact Location
        </Text>
        <Text variant="subtitle" className="my-2">
          (Optional) Notify owner with the location where their property was found.
        </Text>
        <Input
          containerClassName="mt-2"
          placeholder="Address 1"
          value={labelForm.values.exactLocation.address1}
          error={labelForm.errors.exactLocation?.address1}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("exactLocation.address1")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="Address 2"
          value={labelForm.values.exactLocation.address2}
          error={labelForm.errors.exactLocation?.address2}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("exactLocation.address2")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="City"
          value={labelForm.values.exactLocation?.city}
          error={labelForm.errors.exactLocation?.city}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("exactLocation.city")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="State"
          value={labelForm.values.exactLocation?.state}
          error={labelForm.errors.exactLocation?.state}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("exactLocation.state")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="Zip Code"
          value={labelForm.values.exactLocation.zip5}
          error={labelForm.errors.exactLocation?.zip5}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("exactLocation.zip5")}
        />

        <Text variant="title" className="mt-4">
          Recovery Location
        </Text>
        <Text variant="subtitle" className="my-2">
          (Optional) Notify owner with a location to claim their lost property.
        </Text>
        <Input
          containerClassName="mt-2"
          placeholder="Address 1"
          value={labelForm.values.recoveryLocation.address1}
          error={labelForm.errors.recoveryLocation?.address1}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("recoveryLocation.address1")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="Address 2"
          value={labelForm.values.recoveryLocation.address2}
          error={labelForm.errors.recoveryLocation?.address2}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("recoveryLocation.address2")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="City"
          value={labelForm.values.recoveryLocation.city}
          error={labelForm.errors.recoveryLocation?.city}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("recoveryLocation.city")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="State"
          value={labelForm.values.recoveryLocation.state}
          error={labelForm.errors.recoveryLocation?.state}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("recoveryLocation.state")}
        />
        <Input
          containerClassName="mt-2"
          placeholder="Zip Code"
          value={labelForm.values.recoveryLocation.zip5}
          error={labelForm.errors.recoveryLocation?.zip5}
          disabled={modifyLabelMutation.isLoading}
          onChange={labelForm.handleChange("recoveryLocation.zip5")}
        />

        <Button
          type="submit"
          className="mt-4 w-full"
          onClick={labelForm.handleSubmit}
          loading={modifyLabelMutation.isLoading}
        >
          Send Information
        </Button>
      </form>
    </div>
  );
};

export default FoundLabel;
