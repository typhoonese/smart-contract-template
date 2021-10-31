module.exports = {
  networks: {
    ganache_cli: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
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
