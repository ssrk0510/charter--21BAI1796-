# charter--21BAI1796-
Blockchain Merkle Proof and Notification Bot
This project contains two main functionalities:

Merkle Proof Verification Smart Contract: A smart contract for verifying the inclusion of a specific transaction within a blockchain block using Merkle proofs.
Notification Bot for Tracking USDC Transfers: A bot that monitors incoming USDC transfers to a specified Ethereum address on the Sepolia network and sends notifications.
Table of Contents
Features
Installation
Usage
Smart Contract
Notification Bot
Frontend
Contributing
License
Features
Merkle Proof Verification
Fetch transactions from a block on Sepolia or zkSync testnet.
Generate a Merkle tree for block transactions.
Smart contract stores Merkle root and verifies transaction inclusion using Merkle proofs.
Notification Bot for USDC Transfers
Uses The Graph Protocol to track ERC-20 USDC transfers to a specific address.
Filters transfer events and sends notifications.
Simple frontend dashboard to display transfer data and notification status.
Installation
Prerequisites
Node.js and NPM: Install from Node.js website
Smart Contract
The Merkle Proof Verification contract allows users to verify transactions on-chain using Merkle proofs.

Functions:
setMerkleRoot(bytes32 merkleRoot): Stores Merkle root of transactions.
verifyTransaction(bytes32 txHash, bytes32[] memory proof): Verifies transaction using Merkle proof.
Deployment: Deploy the smart contract to the Sepolia or zkSync testnet and save the contract address.

Notification Bot
The notification bot leverages The Graph Protocol to track USDC transfers:

Filters for incoming transfers to a specific address.
Sends a notification when a new transfer is detected.
Frontend
The frontend provides a user interface to interact with the Merkle Proof Verification contract and view USDC transfers:

Input fields for transaction hash and Merkle proof verification.
Dashboard displaying latest USDC transfer events.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a pull request
License
Distributed under the MIT License. See LICENSE for more information.
