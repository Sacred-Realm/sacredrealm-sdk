import { SRDeposit__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function srDeposit() {
  return SRDeposit__factory.connect(contract().SRDeposit, rpcProvider);
}