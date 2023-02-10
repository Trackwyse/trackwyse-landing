/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import Config from "@/config";
import axios from "axios";

console.log(Config.BUILD_ENV === "staging");
console.log(Config.BUILD_ENV);

const baseURL =
  Config.BUILD_ENV == "staging" ? "https://api.dev.trackwyse.com" : "https://api.trackwyse.com";

// Base API Client
const apiClient = axios.create({
  baseURL,
});

const updateFoundLabelDetails = (
  values: FoundLabelDetailsInput
): Promise<FoundLabelDetailsAPIResponse> => {
  const { id, phoneNumber, recoveryLocation, exactLocation } = values;

  return apiClient.post(`/api/v1/labels/found/${id}`, {
    phoneNumber,
    recoveryLocation,
    exactLocation,
  });
};

export default {
  updateFoundLabelDetails,
};
