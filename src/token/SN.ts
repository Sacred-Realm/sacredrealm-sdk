import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { SN__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/sealemlab/sacredrealm-nft',
  cache: new InMemoryCache(),
});

export function sn() {
  return SN__factory.connect(token().SN, rpcProvider);
}

export const snInfo = {
  getSnCounts: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string
  ) => {
    const snCountsQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String) {
        snCounts(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection
        ) {
          total
          owners
          s4
          s5
          s6
          s7
          s8
        }
      }
    `;

    return await client.query({
      query: gql(snCountsQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection
      },
    });
  },
}