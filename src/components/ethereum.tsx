import { useContext } from "react";
import { MnemonicsContext } from "./wrapper";
import Wallets from "./wallets";

export default function Ethereum() {
  const context = useContext(MnemonicsContext);

  if (!context) {
    return <div className="text-white m-5 mt-10">Context not available.</div>;
  }

  const {
    ethereumWallets,
    generateEthereumWallet,
    removeEthereumWallet,
    resetEthereumIndex,
  } = context;

  const clearWallets = () => {
    ethereumWallets.wallets.forEach((wallet) =>
      removeEthereumWallet(wallet.index)
    );
    resetEthereumIndex();
  };

  return (
    <>
      <div className="text-white m-5 mt-10">
        <div className="text-3xl font-medium">Ethereum Wallet</div>
        <div className="mt-3">
          <button
            onClick={async () => await generateEthereumWallet()}
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
      <Wallets
        wallets={ethereumWallets.wallets}
        onRemove={removeEthereumWallet}
      />
    </>
  );
}
