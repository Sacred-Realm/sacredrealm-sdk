export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      SB: '0x89c2BB57f63E8D7E1dA5dC1B9858E9C0b7cfF4D5',
      SN: '0xbd9e51D9C96d916B487bc7a855E6EA8c5E354bBE',
      ST: '0x6F706319C46D1b28508E8e4bCaA59e47D15e028C',
      SR: '0x',
      STLP: '0x',
      SRLP: '0x',
      BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
  } else {
    return {
      SB: '0x390266537F02CeF0FAf1Db2EAf0C91925E6c518e',
      SN: '0x19482E5043cBb96927fda5541B3859Ebde849456',
      ST: '0x4597B8D3Ac4514A6c64A7D48eec71567f013951a',
      SR: '0x7c3323f3d283b46514600cD9AD3F5e821F679b7f',
      STLP: '0x715B692f4D20eA24656A425B14085Ef986d45c5e',
      SRLP: '0xD0810649b5BF55eE3c84d7Fd991B0fcA99b0339c',
      BUSD: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      WBNB: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    };
  }
};

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      Inviting: '0x669b1B48f2a71d8F40196A09E9cEC6e916A7BC0c',
      IDO: '0x93B03C09126E4d61044474b96fEEC547CA56F62d',
      STStaking: '0x',
      BondDepository: '0x',
      Market: '0xF342F3b74f5F5F23664EB4FF08a1691d4a0A2F29',
      SRDeposit: '0x',
      SRWithdraw: '0x',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      Inviting: '0x539C9BdF64037d9625119C35b96d529277490964',
      IDO: '0x143757659F711303ECe7A41478f9913762Fa65a1',
      STStaking: '0xfD701D5078905807658593329eBBe040b7Df8d03',
      BondDepository: '0xAD02176148DC132Bd05BbE64653FFC858Bf54D33',
      Market: '0xFE9fe36B0BB342dbc25ab26E27ABFd56Fb5d49CE',
      SRDeposit: '0x2e8d3785b157104Fa0cF8436499367A64bE0caf1',
      SRWithdraw: '0x77917F28304aa84CeeDd230B98A9d00116a5C4ce',
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
      rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/']
    };
  }
};