require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    }
  },
  networks: {
    goerli: {
      url :'https://eth-mainnet.g.alchemy.com/v2/2stKdFhpn3BuSWwH_Se0TOm81lF_EXL2',
      accounts: [ 'a0a2f0182f05905e5d0a511b60902df9c5cd3a3f7d6d98fd7ab0366d840cfc81' ],
      gas: "auto",
      gasPrice: "auto",
    },
    sepolia: {
      url :'https://eth-sepolia.g.alchemy.com/v2/P0jPzq9txT_WQMRB-b7zFXC8i1ekaOYC',
      accounts: [ 'a0a2f0182f05905e5d0a511b60902df9c5cd3a3f7d6d98fd7ab0366d840cfc81' ],
      gas: "auto",
      gasPrice: "auto",
    }
  }
}