/*
 * Created on Thu Feb 09 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

interface AddressInput {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip5: string;
}

interface FoundLabelDetailsInput {
  id?: string;
  phoneNumber?: string;
  exactLocation?: AddressInput;
  recoveryLocation?: AddressInput;
}
