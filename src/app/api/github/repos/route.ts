import { NextResponse } from 'next/server'
import axios from 'axios'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'LavSarkari'

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

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: GITHUB_TOKEN ? {
          Authorization: `token ${GITHUB_TOKEN}`,
        } : {},
      }
    )

    const repositories = response.data
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

    return NextResponse.json(repositories)
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return NextResponse.json([], { status: 200 })
  }
}