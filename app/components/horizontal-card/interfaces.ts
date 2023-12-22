export interface Game {
    id: number
    age_ratings: number[]
    aggregated_rating: number
    aggregated_rating_count: number
    alternative_names: number[]
    artworks: number[]
    bundles: number[]
    category: number
    cover: number
    created_at: number
    dlcs: number[]
    expansions: number[]
    external_games: number[]
    first_release_date: number
    follows: number
    franchises: number[]
    game_engines: number[]
    game_modes: number[]
    genres: number[]
    hypes: number
    involved_companies: number[]
    keywords: number[]
    name: string
    platforms: number[]
    player_perspectives: number[]
    rating: number
    rating_count: number
    release_dates: number[]
    screenshots: number[]
    similar_games: number[]
    slug: string
    storyline: string
    summary: string
    tags: number[]
    themes: number[]
    total_rating: number
    total_rating_count: number
    updated_at: number
    url: string
    videos: number[]
    websites: number[]
    checksum: string
    language_supports: number[]
    game_localizations: number[]
    collections: number[]
}

export interface Cover {
    id: number
    alpha_channel: boolean
    animated: boolean
    game: number
    height: number
    image_id: string
    url: string
    width: number
    checksum: string
  }