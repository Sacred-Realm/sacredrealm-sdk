import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Market__factory } from 'sealemlab-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/sealemlab/market',
  cache: new InMemoryCache(),
})

export function market() {
  return Market__factory.connect(contract().Market, rpcProvider);
}

export const marketInfo = {
  getBuyInfos: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    buyer?: string,
    seller?: string,
    nft?: string,
    token?: string,
    stars?: number,
    rarity?: number,
    role?: number,
    part?: number,
    suit?: number,
    boxType?: number,
  ) => {
    const buyInfosQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $buyer: String, $seller: String, $nft: String, $token: String, $stars: BigInt, $rarity: BigInt, $role: BigInt, $part: BigInt, $suit: BigInt, $boxType: BigInt) {
        buyInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${buyer ? `buyer: $buyer,` : ``} ${seller ? `seller: $seller,` : ``} ${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``} ${stars ? `stars: $stars,` : ``} ${rarity ? `rarity: $rarity,` : ``} ${role ? `role: $role,` : ``} ${part ? `part: $part,` : ``} ${suit ? `suit: $suit,` : ``} ${boxType ? `boxType: $boxType,` : ``}}
        ) {
          buyer
          seller
          nft
          nftId
          token
          price
          fee
          feeAmount
          sellAmount
          buyTime
          stars
          rarity
          power
          role
          part
          suit
          boxType
        }
      }
    `;

    return await client.query({
      query: gql(buyInfosQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        buyer: buyer,
        seller: seller,
        nft: nft,
        token: token,
        stars: stars,
        rarity: rarity,
        role: role,
        part: part,
        suit: suit,
        boxType: boxType,
      },
    });
  },

  getSellInfos: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    seller?: string,
    nft?: string,
    token?: string,
    stars?: number,
    rarity?: number,
    role?: number,
    part?: number,
    suit?: number,
    boxType?: number,
  ) => {
    const sellInfosQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $seller: String, $nft: String, $token: String, $stars: BigInt, $rarity: BigInt, $role: BigInt, $part: BigInt, $suit: BigInt, $boxType: BigInt) {
        sellInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${seller ? `seller: $seller,` : ``} ${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``} ${stars ? `stars: $stars,` : ``} ${rarity ? `rarity: $rarity,` : ``} ${role ? `role: $role,` : ``} ${part ? `part: $part,` : ``} ${suit ? `suit: $suit,` : ``} ${boxType ? `boxType: $boxType,` : ``}}
        ) {
          seller
          nft
          nftId
          token
          price
          sellTime
          stars
          rarity
          power
          role
          part
          suit
          boxType
        }
      }
    `;

    return await client.query({
      query: gql(sellInfosQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        seller: seller,
        nft: nft,
        token: token,
        stars: stars,
        rarity: rarity,
        role: role,
        part: part,
        suit: suit,
        boxType: boxType,
      },
    });
  },

  getCounters: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    nft?: string,
    token?: string,
  ) => {
    const countersQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $nft: String, $token: String) {
        counters(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${nft ? `nft: $nft,` : ``} ${token ? `token: $token,` : ``}}
        ) {
          nft
          token
          transactions
          volume
          items
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
        nft: nft,
        token: token,
      },
    });
  },
}