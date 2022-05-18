export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      SB: '0x',
      SN: '0x',
      ST: '0x6F706319C46D1b28508E8e4bCaA59e47D15e028C',
      SR: '0x',
      BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
  } else {
    return {
      SB: '0xa844b28aBf7aF74438131A1aF642Ef0CCAa8C166',
      SN: '0xb2761cd8EFD9f436Efa1b205dEB1dC957300Ede5',
      ST: '0x4597B8D3Ac4514A6c64A7D48eec71567f013951a',
      SR: '0x7c3323f3d283b46514600cD9AD3F5e821F679b7f',
      BUSD: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      WBNB: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    };
  }
};

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      Inviting: '0x',
      STStaking: '0x',
      BondDepository: '0x',
      Market: '0x',
      SRDeposit: '0x',
      SRWithdraw: '0x',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      Inviting: '0x1e875755d65fddC53d0995ADD06b257e736cD3B0',
      STStaking: '0x2bd2c749BD7326d1af9a45Dd4C56d64A35eA8d1D',
      BondDepository: '0x00f8389bfB557cDb4D0CA17aED080ea3109099b5',
      Market: '0x',
      SRDeposit: '0x2e8d3785b157104Fa0cF8436499367A64bE0caf1',
      SRWithdraw: '0x2Bb766e8b9C14Ea8C8aD182D5861cc8D809B77c6',
      PancakeRouter: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x38',
      chainName: 'BSC-Mainnet',
      rpcUrls: ['https://bsc-dataseed.binance.org/']
    };
  } else {
    return {
      chainId: '0x61',
      chainName: 'BSC-Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
    };
  }
};