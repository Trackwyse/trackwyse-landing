interface Label {
  _id: string;
  owner: string;
  activated: boolean;
  isLost: boolean;
  uniqueID: string;

  name?: string;
  color?: Color;
  message?: string;
  phoneNumber?: string;

  foundNear?: string; // Based on IP address
  foundDate?: Date; // When the label was found
  foundExactLocation?: LabelAddress; // Exact location of where the label was, if user provided it
  foundRecoveryLocation?: LabelAddress; // Where the user can recover the label, if user provided it
  foundRecoveryPossible?: boolean; // If the user can recover the label
  finderPhoneNumber?: string; // Phone number of the person who found the label

  createdAt?: Date;
  updatedAt?: Date;
}

interface Color {
  bg: string;
  borderSelected: string;
  borderUnselected: string;
}

interface Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip5: string;
}

interface LabelAddress extends Address {
  latitude: number;
  longitude: number;
}
