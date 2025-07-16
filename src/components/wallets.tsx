import type { WalletProp } from "../types/wallet";
import Wallet from "./wallet";

interface WalletsProps {
  wallets: WalletProp[];
  onRemove: (index: number) => void;
}

export default function Wallets({ wallets, onRemove }: WalletsProps) {
  return (
    <>
      {wallets.map((ele: WalletProp) => (
        <div key={ele.index}>
          <Wallet
            title={ele.title}
            publicKey={ele.publicKey}
            privateKey={ele.privateKey}
            onDelete={() => onRemove(ele.index)}
          />
        </div>
      ))}
    </>
  );
}
