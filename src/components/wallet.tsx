import { useState } from "react";
import { FaTrash, FaEye, FaEyeSlash, FaClipboard } from "react-icons/fa";

interface WalletCardProps {
  title: string;
  publicKey: string;
  privateKey: string;
  onDelete?: () => void;
}

export default function Wallet({
  title,
  publicKey,
  privateKey,
  onDelete,
}: WalletCardProps) {
  const [showPrivate, setShowPrivate] = useState(false);
  const [copiedPublic, setCopiedPublic] = useState(false);
  const [copiedPrivate, setCopiedPrivate] = useState(false);

  const togglePrivate = () => setShowPrivate(!showPrivate);

  const hiddenPrivate =
    "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••";

  const copyPublic = () => {
    navigator.clipboard.writeText(publicKey).then(() => {
      setCopiedPublic(true);
      setTimeout(() => setCopiedPublic(false), 2000);
    });
  };

  const copyPrivate = () => {
    navigator.clipboard.writeText(privateKey).then(() => {
      setCopiedPrivate(true);
      setTimeout(() => setCopiedPrivate(false), 2000);
    });
  };

  return (
    <div className="bg-black/90 text-white rounded-xl p-4 shadow-xs mb-5 shadow-white/30  max-w-2xl mx-auto hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
      <div className="mb-4 relative">
        <p className="text-sm font-medium">Public Key</p>
        <div className="flex items-center">
          <p className="text-base break-all flex-1">{publicKey}</p>
          <button
            onClick={copyPublic}
            className="ml-2 text-gray-400 hover:text-white transition-colors relative"
            aria-label="Copy public key"
          >
            <FaClipboard className="w-5 h-5" />
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 rounded transition-opacity ${
                copiedPublic ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied!
            </span>
          </button>
        </div>
      </div>
      <div className="relative">
        <p className="text-sm font-medium">Private Key</p>
        <div className="flex items-center justify-between bg-black/50 rounded-md px-3 py-2">
          <span className="text-base flex-1 truncate">
            {showPrivate ? privateKey : hiddenPrivate}
          </span>
          <button
            onClick={togglePrivate}
            className="ml-2 text-gray-400 hover:text-white transition-colors"
          >
            {showPrivate ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
          {showPrivate && (
            <button
              onClick={copyPrivate}
              className="ml-2 text-gray-400 hover:text-white transition-colors relative"
              aria-label="Copy private key"
            >
              <FaClipboard className="w-5 h-5" />
              <span
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 rounded transition-opacity ${
                  copiedPrivate ? "opacity-100" : "opacity-0"
                }`}
              >
                Copied!
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
