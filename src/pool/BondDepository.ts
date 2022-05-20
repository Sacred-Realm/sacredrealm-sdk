import { BondDepository__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function bondDepository() {
  return BondDepository__factory.connect(contract().BondDepository, rpcProvider);
}