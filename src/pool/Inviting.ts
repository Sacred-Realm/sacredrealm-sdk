import { Inviting__factory } from 'sacredrealm-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function inviting() {
  return Inviting__factory.connect(contract().Inviting, rpcProvider);
}