import { IPancakeRouter__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function pancakeRouter() {
  return IPancakeRouter__factory.connect(contract().PancakeRouter, rpcProvider);
}