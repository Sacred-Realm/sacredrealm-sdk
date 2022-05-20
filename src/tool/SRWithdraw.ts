import { SRWithdraw__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function srWithdraw() {
  return SRWithdraw__factory.connect(contract().SRWithdraw, rpcProvider);
}