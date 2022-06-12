import { IDO__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function ido() {
  return IDO__factory.connect(contract().IDO, rpcProvider);
}