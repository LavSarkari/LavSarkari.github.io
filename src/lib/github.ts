import { GraphQLClient } from 'graphql-request'
import axios from 'axios'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'LavSarkari'

// GraphQL client for pinned repositories
const graphqlClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
})

// Types
export interface Repository {
  id: string
  name: string
  description: string | null
  url: string
  stargazerCount: number
  forkCount: number
  primaryLanguage: {
    name: string
    color: string
  } | null
  updatedAt: string
  isArchived: boolean
  isFork: boolean
}

export interface PinnedRepository {
  id: string
  name: string
  description: string | null
  url: string
  stargazerCount: number
  primaryLanguage: {
    name: string
    color: string
  } | null
}

// GraphQL query for pinned repositories
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

export async function getPinnedRepositories(): Promise<PinnedRepository[]> {
  try {
    const data: any = await graphqlClient.request(PINNED_REPOS_QUERY, {
      username: GITHUB_USERNAME,
    })

    return data.user.pinnedItems.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
      description: edge.node.description,
      url: edge.node.url,
      stargazerCount: edge.node.stargazerCount,
      primaryLanguage: edge.node.primaryLanguage,
    }))
  } catch (error) {
    console.error('Error fetching pinned repositories:', error)
    return []
  }
}

export async function getAllRepositories(): Promise<Repository[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: GITHUB_TOKEN ? {
          Authorization: `token ${GITHUB_TOKEN}`,
        } : {},
      }
    )

    // Filter out forks and archived repos, then map to our interface
    return response.data
      .filter((repo: any) => !repo.fork && !repo.archived)
      .map((repo: any) => ({
        id: repo.id.toString(),
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stargazerCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        primaryLanguage: repo.language ? {
          name: repo.language,
          color: getLanguageColor(repo.language),
        } : null,
        updatedAt: repo.updated_at,
        isArchived: repo.archived,
        isFork: repo.fork,
      }))
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return []
  }
}

// Helper function to get language colors
function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Vue: '#2c3e50',
    React: '#61dafb',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Shell: '#89e051',
    Dockerfile: '#384d54',
  }
  
  return colors[language] || '#6b7280'
}