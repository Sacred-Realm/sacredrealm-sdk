import { SB__factory } from 'sacredrealm-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function sb() {
  return SB__factory.connect(token().SB, rpcProvider);
}