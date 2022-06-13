import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Inviting__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/sealemlab/inviting',
  cache: new InMemoryCache(),
})

export function inviting() {
  return Inviting__factory.connect(contract().Inviting, rpcProvider);
}

export const invitingInfo = {
  getCounters: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    inviter?: string
  ) => {
    const countersQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $inviter: String) {
        counters(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${inviter ? `inviter: $inviter,` : ``}}
        ) {
          inviter
          usersCount
        }
      }
    `;

    return await client.query({
      query: gql(countersQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        inviter: inviter
      },
    });
  },
}