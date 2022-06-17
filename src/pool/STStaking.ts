import { STStaking__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function stStaking() {
  return STStaking__factory.connect(contract().STStaking, rpcProvider);
}

export const stStakingInfo = {
  getApr: async (stPrice: number, srPrice: number) => {
    const srPerYear = Number(await stStaking().srPerBlock()) * 28800 * 365 / 1e18;
    const srValuePerYear = srPerYear * srPrice;

    const stakedST = Number(await stStaking().stakedST()) / 1e18;
    const stakeUsdValue = stakedST * stPrice;

    return srValuePerYear / stakeUsdValue * 100;
  },

  getRoi: async (user: string, srPrice: number) => {
    const stakedST = Number(await stStaking().stakedST());
    const userStakedST = Number(await stStaking().userStakedST(user));
    const userSharedST = userStakedST / stakedST;

    const srPerYear = Number(await stStaking().srPerBlock()) * 28800 * 365 / 1e18;
    const srValuePerYear = srPerYear * srPrice;

    return srValuePerYear * userSharedST;
  },
}