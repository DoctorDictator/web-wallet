export interface WalletProp {
  index: number;
  title: string;
  publicKey: string;
  privateKey: string;
}
export interface WalletsProps {
  wallets: WalletProp[];
}
