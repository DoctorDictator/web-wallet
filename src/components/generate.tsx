import { useContext } from "react";
import { MnemonicsContext } from "./wrapper";

export default function Generate() {
  const { mnemonic, createMnemonics } = useContext(MnemonicsContext);

  return (
    <>
      {!mnemonic && (
        <div className="text-white m-5">
          <div className="text-3xl my-3 flex justify-center">
            Generate a Seed Phrase
          </div>
          <div className="flex justify-center ">
            <button
              onClick={createMnemonics}
              className="m-3 text-xl font-medium hover:-translate-y-1 duration-200 ease-in-out hover:scale-105 text-black bg-white px-3 py-2 rounded-md"
            >
              Generate
            </button>
          </div>
        </div>
      )}
    </>
  );
}
