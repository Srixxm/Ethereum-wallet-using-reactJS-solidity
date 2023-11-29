// https://eth-sepolia.g.alchemy.com/v2/WGYqhUYgvi9z2WOFaGlNB2EvAtTwjNK2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WGYqhUYgvi9z2WOFaGlNB2EvAtTwjNK2',
      accounts: ['c983e6bb7105a251be18970a0af6d49785da3b38c9423bc6b1c96833166b614b']
    }
  }
}