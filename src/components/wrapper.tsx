import React, { createContext, useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import * as nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { HDNodeWallet } from "ethers";
import type { WalletProp, WalletsProps } from "../types/wallet";

export interface MnemonicsContextType {
  mnemonic: string;
  setMnemonic: React.Dispatch<React.SetStateAction<string>>;
  createMnemonics: () => void;
  solanaWallets: WalletsProps;
  addSolanaWallet: (wallet: WalletProp) => void;
  removeSolanaWallet: (index: number) => void;
  resetSolanaIndex: () => void;
  ethereumWallets: WalletsProps;
  addEthereumWallet: (wallet: WalletProp) => void;
  removeEthereumWallet: (index: number) => void;
  resetEthereumIndex: () => void;
  generateSolanaWallet: () => Promise<void>;
  generateEthereumWallet: () => Promise<void>;
}

const MnemonicsContext = createContext<MnemonicsContextType | undefined>(
  undefined
);

function MnemonicsProvider({ children }: { children: React.ReactNode }) {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [solanaWallets, setSolanaWallets] = useState<WalletsProps>({
    wallets: [],
  });
  const [ethereumWallets, setEthereumWallets] = useState<WalletsProps>({
    wallets: [],
  });
  const [solanaIndex, setSolanaIndex] = useState<number>(0);
  const [ethereumIndex, setEthereumIndex] = useState<number>(0);

  const createMnemonics = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
  };

  const addSolanaWallet = (wallet: WalletProp) => {
    setSolanaWallets((prev: WalletsProps) => ({
      wallets: [...prev.wallets, wallet],
    }));
  };

  const removeSolanaWallet = (index: number) => {
    setSolanaWallets((prev: WalletsProps) => ({
      wallets: prev.wallets.filter((w) => w.index !== index),
    }));
  };

  const resetSolanaIndex = () => {
    setSolanaIndex(0);
  };

  const addEthereumWallet = (wallet: WalletProp) => {
    setEthereumWallets((prev: WalletsProps) => ({
      wallets: [...prev.wallets, wallet],
    }));
  };

  const removeEthereumWallet = (index: number) => {
    setEthereumWallets((prev: WalletsProps) => ({
      wallets: prev.wallets.filter((w) => w.index !== index),
    }));
  };

  const resetEthereumIndex = () => {
    setEthereumIndex(0);
  };

  const generateSolanaWallet = async () => {
    if (!mnemonic) return;
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${solanaIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    const publicKey = keypair.publicKey.toBase58();
    const privateKey = bs58.encode(secret);
    const wallet: WalletProp = {
      index: solanaIndex,
      title: `Solana Wallet ${solanaIndex + 1}`,
      publicKey,
      privateKey,
    };
    addSolanaWallet(wallet);
    setSolanaIndex((prev) => prev + 1);
  };

  const generateEthereumWallet = async () => {
    if (!mnemonic) return;
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/60'/${ethereumIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);
    const publicKey = child.address;
    const privateKey = child.privateKey;
    const wallet: WalletProp = {
      index: ethereumIndex,
      title: `Ethereum Wallet ${ethereumIndex + 1}`,
      publicKey,
      privateKey,
    };
    addEthereumWallet(wallet);
    setEthereumIndex((prev) => prev + 1);
  };

  return (
    <MnemonicsContext.Provider
      value={{
        mnemonic,
        setMnemonic,
        createMnemonics,
        solanaWallets,
        addSolanaWallet,
        removeSolanaWallet,
        resetSolanaIndex,
        ethereumWallets,
        addEthereumWallet,
        removeEthereumWallet,
        resetEthereumIndex,
        generateSolanaWallet,
        generateEthereumWallet,
      }}
    >
      {children}
    </MnemonicsContext.Provider>
  );
}

export { MnemonicsContext, MnemonicsProvider };
