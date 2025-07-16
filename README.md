# Web Wallet

## Project Overview

The Web Wallet is a decentralized cryptocurrency wallet application developed using React, TypeScript, and Tailwind CSS. This project emerged from a collaborative effort to create a user-friendly interface for managing Solana and Ethereum wallets, leveraging modern web technologies and blockchain-specific libraries. The journey began with generating mnemonic phrases, evolved into deriving wallet keys, and expanded to include comprehensive wallet management features across two major blockchains.

## Purpose

Designed as a personal exploration into blockchain wallet development, the Web Wallet aims to provide a secure and intuitive platform for users to generate, store, and manage their cryptocurrency wallets. It serves as a learning tool for implementing HD (Hierarchical Deterministic) wallet standards and integrating with Solana and Ethereum ecosystems, all within a single-page application.

## Key Features

- **Mnemonic Phrase Management**: The application generates BIP39-compliant mnemonic phrases, displayed in a collapsible seed phrase component with copy-to-clipboard functionality. Users can regenerate or clear the phrase as needed.
- **Multi-Chain Wallet Support**: Supports both Solana and Ethereum wallets, allowing users to derive public and private keys using chain-specific derivation paths (e.g., `m/44'/501'/<index>'/0'` for Solana, `m/44'/60'/<index>'/0'` for Ethereum).
- **Wallet Operations**: Users can add new wallets incrementally, view details including public and private keys, and clear all wallets to start fresh. Private keys are hidden by default with a toggle feature for security.
- **Interactive UI**: Features a modern design with Tailwind CSS, including hover effects, animated buttons, and tooltips. The choice component lets users switch between Solana and Ethereum views seamlessly.
- **State Management**: Utilizes React's Context API to centrally manage mnemonic phrases, wallet lists, and index counters, ensuring a cohesive user experience across components.

## Development Journey

The project started with a basic mnemonic generator using the `bip39` library, quickly expanding to include key derivation with `ed25519-hd-key` and `tweetnacl` for Solana, and `ethers.js` for Ethereum. Early iterations focused on a single Solana wallet component, which was later mirrored for Ethereum. The addition of wallet cards with copy functionality and a clear wallet feature marked significant enhancements. Challenges included aligning UI elements (e.g., seed phrase buttons), resolving GitHub deployment issues, and ensuring TypeScript type safety across the codebase.

## Technical Highlights

- **Libraries**: Leverages `bip39` for mnemonics, `@solana/web3.js` and `tweetnacl` for Solana, `ethers.js` for Ethereum, and `react-icons` for UI enhancements.
- **Structure**: Organized into components like `SeedPhrase`, `Solana`, `Ethereum`, `Wallet`, and `Wallets`, with a `wrapper.tsx` context provider managing state.
- **Design**: Tailwind CSS provides a responsive, dark-themed interface with smooth transitions and interactive elements.

## Future Vision

While functional, the Web Wallet is a work in progress. Future plans include adding transaction signing capabilities, enhancing security with local storage encryption, and supporting additional blockchains. The project also aims to refine the UI for mobile devices and implement a back button to toggle between blockchain views.

## Acknowledgments

This project was built with guidance and iterative feedback, reflecting a hands-on learning process in React, TypeScript, and blockchain integration. Special thanks to the open-source community for libraries that made this possible.
