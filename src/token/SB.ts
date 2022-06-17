import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { SB__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/sealemlab/sacredrealm-box',
  cache: new InMemoryCache(),
});

export function sb() {
  return SB__factory.connect(token().SB, rpcProvider);
}

export const sbInfo = {
  getSbCounts: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string
  ) => {
    const sbCountsQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String) {
        sbCounts(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection
        ) {
          total
          owners
          t0
          t1
          t2
          t3
          t4
        }
      }
    `;

    return await client.query({
      query: gql(sbCountsQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection
      },
    });
  },
}