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
  let { id, phoneNumber, recoveryLocation, exactLocation } = values;

  // check if the values of recoveryLocation and exactLocation are empty
  // if they are, then we don't want to send them to the API
  // because the API will throw an error if we do
  if (recoveryLocation && Object.values(recoveryLocation).every((value) => value === "")) {
    recoveryLocation = undefined;
  }

  if (exactLocation && Object.values(exactLocation).every((value) => value === "")) {
    exactLocation = undefined;
  }

  return apiClient.post(`/api/v1/labels/found/${id}`, {
    phoneNumber,
    recoveryLocation,
    exactLocation,
  });
};

export default {
  updateFoundLabelDetails,
};
