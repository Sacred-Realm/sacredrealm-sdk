import { STStaking__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function stStaking() {
  return STStaking__factory.connect(contract().STStaking, rpcProvider);
}