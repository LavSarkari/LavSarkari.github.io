import { NextResponse } from 'next/server'
import { GraphQLClient } from 'graphql-request'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'LavSarkari'

const graphqlClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
})

const PINNED_REPOS_QUERY = `
  query GetPinnedRepos($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`

export async function GET() {
  try {
    const data: any = await graphqlClient.request(PINNED_REPOS_QUERY, {
      username: GITHUB_USERNAME,
    })

    const pinnedRepos = data.user.pinnedItems.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
      description: edge.node.description,
      url: edge.node.url,
      stargazerCount: edge.node.stargazerCount,
      primaryLanguage: edge.node.primaryLanguage,
    }))

    return NextResponse.json(pinnedRepos)
  } catch (error) {
    console.error('Error fetching pinned repositories:', error)
    return NextResponse.json([], { status: 200 })
  }
}