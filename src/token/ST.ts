import { ST__factory } from 'sacredrealm-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function st() {
  return ST__factory.connect(token().ST, rpcProvider);
}