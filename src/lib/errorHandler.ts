/*
 * Created on Sat Feb 11 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import { AxiosError } from "axios";
import { toast as Toast } from "react-toastify";

const handle = (error: any, form?: any) => {
  if (error instanceof AxiosError) {
    const errorObject = error.response?.data?.error;

    if (errorObject) {
      if (errorObject.field) {
        form.setErrors({
          [errorObject.field]: errorObject.humanMessage,
        });
      } else {
        Toast.error(errorObject.humanMessage);
      }
    } else {
      Toast.error("Something went wrong. Please try again later.");
    }
  } else {
    Toast.error("Something went wrong. Please try again later.");
  }
};

export default {
  handle,
};
