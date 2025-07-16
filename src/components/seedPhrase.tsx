import { useContext, useState, useRef } from "react";
import SeedButton from "./seedButton";
import { MnemonicsContext } from "./wrapper";
import { FaClipboard } from "react-icons/fa";

export default function SeedPhrase() {
  const context = useContext(MnemonicsContext);
  const mnemonic = context?.mnemonic ?? "";
  const [isOpen, setIsOpen] = useState(true);
  const list = mnemonic.split(" ");
  const [showCopied, setShowCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    if (mnemonic) {
      navigator.clipboard.writeText(mnemonic).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      });
    }
  };

  return (
    <>
      {mnemonic && (
        <div className="my-3 w-auto m-4 px-3 border ring ring-white rounded-md">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full px-4 py-3 bg-black text-white font-medium focus:outline-none"
          >
            <span className="text-3xl">Seed Phrase</span>
            <span className="transition-transform duration-200 ease-in-out hover:scale-120">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>
          {isOpen && (
            <div className="px-4 py-3 bg-secondary/50 text-white relative">
              {list.map((ele: string, index: number) => (
                <SeedButton key={index}>{ele}</SeedButton>
              ))}
              {/* Modern Copy Button with Tooltip */}
              <div>
                <div className="mt-2 -mb-2 relative inline-block">
                  <button
                    onClick={copyToClipboard}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                    aria-label="Copy to clipboard"
                  >
                    <FaClipboard className="w-5 h-5" />
                  </button>
                  <div
                    ref={tooltipRef}
                    className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                      (isHovered && !showCopied) || showCopied
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95"
                    } tooltip dark:bg-gray-700 whitespace-nowrap`}
                    role="tooltip"
                  >
                    <span className={showCopied ? "hidden" : ""}>
                      Copy to clipboard
                    </span>
                    <span className={showCopied ? "" : "hidden"}>Copied!</span>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-t-4 border-transparent border-b-4 border-transparent border-r-4 border-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
