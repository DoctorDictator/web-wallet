import { useContext, useState } from "react";
import Solana from "./solana";
import Ethereum from "./ethereum";
import { MnemonicsContext } from "./wrapper";

export default function Choice() {
  const context = useContext(MnemonicsContext);
  const mnemonic = context?.mnemonic;
  const [selectedChain, setSelectedChain] = useState<
    "solana" | "ethereum" | null
  >(null);

  return (
    <>
      {mnemonic && (
        <div>
          <div className="text-white m-5 mt-10">
            <div className="text-3xl font-medium flex justify-center">
              <p>Choose a blockchain to get started.</p>
            </div>
            <div className="mt-3 flex justify-center">
              <button
                onClick={() => setSelectedChain("solana")}
                className="m-3 text-xl font-medium hover:-translate-y-1 duration-200 ease-in-out hover:scale-105 text-black bg-white px-3 py-2 rounded-md"
              >
                Solana
              </button>
              <button
                onClick={() => setSelectedChain("ethereum")}
                className="m-3 text-xl font-medium hover:-translate-y-1 duration-200 ease-in-out hover:scale-105 text-black bg-white px-3 py-2 rounded-md"
              >
                Ethereum
              </button>
            </div>
          </div>
          {selectedChain === "solana" && <Solana />}
          {selectedChain === "ethereum" && <Ethereum />}
        </div>
      )}
    </>
  );
}
