export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      SB: '0xA8De106949D494E2b346E4496695Abe71C4b02eC',
      SN: '0xcE4c314f5baeDea571c60CF1D09eCf4304FeCF6A',
      ST: '0x6F706319C46D1b28508E8e4bCaA59e47D15e028C',
      SR: '0x02894e51c34210396c23A36102a95EE3EC63356D',
      STLP: '0x10Bd5Ac4cB6167150c052273A710b14B033B0958',
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
      STSeedPool: '0xf2F0D04E4ecF1E0ef3c3C95B9Ad7376218a185eF',
      STPrivatePool: '0x6Da48f41319fd8023e7886F55AB15DaE927F49b4',
      STTeamPool: '0xB830656B5A9de339086e175E3C570C0Dd7A6Ed30',
      Inviting: '0x058A11b288b4bDD5De2FEa5f338B27671bFd2582',
      IDO: '0x93B03C09126E4d61044474b96fEEC547CA56F62d',
      STStaking: '0x593064550a2d0e0F76c0602612De59352A9A5664',
      BondDepository: '0x09627963fEB32DDe5c122A47726f80Ad067F019F',
      Market: '0x508980d9B39656D07D23f9d5e93DDd5dc77dCB52',
      SRDeposit: '0xe6F495D026Add0B7bB9ac013d68f93307164f542',
      SRWithdraw: '0x50f1664C6045a6e97037145e32695b87E23b9F47',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      STSeedPool: '0x7dabCf84e51aE65b1757Fe8303c0e320cA8C873f',
      STPrivatePool: '0xD3aD233B151C6De09Fda3c153dCC91CB0c7bC2ea',
      STTeamPool: '0xe512880e42cb760C786b09A98138110F3f9bfEBA',
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
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
    };
  }
};