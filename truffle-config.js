module.exports = {
  networks: {
    //@notice ganache_cli_quorum is set to behave like a quorum network
    //gasPrice = 0, gasLimit = 700000000, type = 'quorum
    ganache_cli_quorum: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gasPrice: 0,
      gasLimit: 700000000,
      type: 'quorum',
    },
  },
  // Mocha configurations
  mocha: {
    timeout: 100000,
  },

  // Solc compiler configuration
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
      version: '0.8.9',
    },
  },
  plugins: ['solidity-coverage'],
};
