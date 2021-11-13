# Smart Contract Engineering Template for Ethereum & ConsenSys Quorum

A complete template to kick start smart contract engineering with ease.

**_Features:_**

1. git hooks with husky for pre-commit linting & pre-push smart contract testing
2. recommended extensions for Solidity and JavaScript development
3. configured prettier for .js and .sol files
4. sample project skelaton for smart contract engineering
5. sample tests with mocha using ganache cli
6. migrations to a ganache cli network using truffle
7. configured linting for .sol and .js files

## HOW TO

### Clone repo

`git clone https://github.com/typhoonese/smart-contracts.git`

### Install

`npm install`

### Run Ganache CLI for Quorum

`npm ganache-quorum:local`  
In this mode, the ganache cli is configured to act more like a Quorum network.

### Migrate Smart Contracts

`npm run migrate:local`  
Prior to this command, a running ganache network is required. See above for how to run a ganache network locally.

### Test Smart Contracts with Local Ganache CLI

`npm run test:local`  
Prior to this command, a running ganache network is required. See above for how to run a ganache network locally.

### Lint

To lint the project: `npm run lint`  
To lint .sol files: `npm run lint:contracts`  
To lint .js files: `npm run lint:js`

### Format

`npm run format:prettier`
