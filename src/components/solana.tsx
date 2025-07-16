import { useContext } from "react";
import { MnemonicsContext } from "./wrapper";
import Wallets from "./wallets";

export default function Solana() {
  const context = useContext(MnemonicsContext);
  if (!context) {
    return <div className="text-white m-5 mt-10">Context not found.</div>;
  }
  const {
    solanaWallets,
    generateSolanaWallet,
    removeSolanaWallet,
    resetSolanaIndex,
  } = context;
  const clearWallets = () => {
    solanaWallets.wallets.forEach((wallet) => removeSolanaWallet(wallet.index));
    if (resetSolanaIndex) resetSolanaIndex();
  };

  return (
    <>
      <div className="text-white m-5 mt-10">
        <div className="text-3xl font-medium">Solana Wallet</div>
        <div className="mt-3">
          <button
            onClick={async () => await generateSolanaWallet()}
            className="m-3 text-xl font-medium hover:-translate-y-1 duration-200 ease-in-out hover:scale-105 text-black bg-white px-3 py-2 rounded-md"
          >
            Add Wallet
          </button>
          <button
            onClick={clearWallets}
            className="m-3 text-xl font-medium hover:-translate-y-1 duration-200 ease-in-out hover:scale-105 text-black bg-red-600 px-3 py-2 rounded-md"
          >
            Clear Wallet
          </button>
        </div>
      </div>
      <Wallets wallets={solanaWallets.wallets} onRemove={removeSolanaWallet} />
    </>
  );
}
