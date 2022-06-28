import { ethers, utils, constants, BigNumber } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { token, network } from './constant';

export const util = utils;
export const constant = constants;
export const bn = BigNumber;

export const rpcProvider = new ethers.providers.JsonRpcProvider(network().rpcUrls[0]);
let web3Provider = newWeb3Provider(localStorage.getItem('walletType'));

function newWeb3Provider(walletType: string | null) {
  let provider;

  if (walletType == 'walletconnect') {
    provider = new WalletConnectProvider({
      rpc: {
        [Number(network().chainId)]: network().rpcUrls[0],
      },
      chainId: Number(network().chainId)
    });
  } else {
    provider = (window as any)[walletType && walletType != 'metamask' ? walletType : 'ethereum'];
  }

  return provider;
}

export const wallet = {
  getCurrentAccount: async () => {
    return await web3Provider.request({ method: 'eth_accounts' });
  },

  getAccount: async (walletType: string | null) => {
    web3Provider = newWeb3Provider(walletType);
    localStorage.setItem('walletType', walletType ? walletType : 'metamask')
    return walletType == 'walletconnect' ? await web3Provider.enable() : await web3Provider.request({ method: 'eth_requestAccounts' });
  },

  getChainId: async () => {
    return await web3Provider.request({ method: 'eth_chainId' });
  },

  addChain: async () => {
    return await web3Provider.request({
      method: 'wallet_addEthereumChain',
      params: [network()]
    });
  },

  addBUSD: async (img: string) => {
    return await web3Provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token().BUSD,
          symbol: 'BUSD',
          decimals: 18,
          image: img,
        },
      },
    });
  },

  addST: async (img: string) => {
    return await web3Provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token().ST,
          symbol: 'ST',
          decimals: 18,
          image: img,
        },
      },
    });
  },

  addSR: async (img: string) => {
    return await web3Provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token().SR,
          symbol: 'SR',
          decimals: 18,
          image: img,
        },
      },
    });
  },

  disconnect: async () => {
    return await web3Provider.disconnect();
  },

  onAccountChanged: (handleAccountsChanged: any) => {
    web3Provider.on('accountsChanged', handleAccountsChanged);
  },

  onChainChanged: (handleChainChanged: any) => {
    web3Provider.on('chainChanged', handleChainChanged);
  },

  onDisconnect: (handleDisconnect: any) => {
    web3Provider.on('disconnect', handleDisconnect);
  },
}

export function getProvider() {
  return new ethers.providers.Web3Provider(web3Provider);
}

export function getSigner() {
  return new ethers.providers.Web3Provider(web3Provider).getSigner();
}

export function getRandomNumber(snId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [snId, slot])).mod(range).add(base).toNumber();
}

export function getSourceUrl(attr: number[]) {
  const cdn = '//cdn.sealemlab.com/nft';

  const starsArr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
  const roleArr = ['Gl', 'As', 'Wi', 'Fi'];
  const partArr = ['Wp', 'Hair', 'Upper', 'Arm', 'Leg', 'Belt', 'Neck', 'Ring'];
  const suitArr = ['01', '02', '03', '04'];

  const stars = starsArr[attr[0] - 1];
  const role = roleArr[attr[2] - 1];
  const part = partArr[attr[3] - 1];
  const suit = suitArr[attr[4] - 1];

  if (attr[3] >= 6) {
    return `${cdn}/${role}/TEX_ACC_${role}_A_${part}_${suit}`;
  } else {
    return `${cdn}/${role}/TEX_PC_${role}_Set${stars}_${part}_Icon_${suit}`;
  }
}
