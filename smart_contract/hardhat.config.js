require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/efeu2e0rFdovVZ4SzaZB_ooBzjcSqZEK',
      accounts: [
        'c3355e201e0ea064a2e40f1c0e7641394f2ba5d9a8b1bc8510139292b60cbbc2',
      ],
    },
  },
}