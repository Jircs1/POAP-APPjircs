export enum DialogIdentifier {
  DIALOG_MINT,
}

export type User = {
  walletAddress: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isOrganizer: boolean;
};

export type Event = {
  id: number;
  title: string;
  uri: string;
  count: number;
  date: string;
  networkId: number;
  ownerWalletAddress: string;
  owner?: User;
  attendees?: User[];
};

export type Metadata = {
  title: string,
  description: string,
  collectionSize: number,
  location: string,
  date: string,
  uri: string,
  account: string,
};
