import { SB__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function sb() {
  return SB__factory.connect(token().SB, rpcProvider);
}