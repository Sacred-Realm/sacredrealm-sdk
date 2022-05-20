import { SN__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function sn() {
  return SN__factory.connect(token().SN, rpcProvider);
}