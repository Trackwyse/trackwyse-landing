/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

interface APIResponse {
  data: {
    error: boolean;
    message: string;
  };
}

type FoundLabelDetailsAPIResponse = APIResponse & {
  data: {
    label: Label;
  };
};
