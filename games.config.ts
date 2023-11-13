type GamesConfigItem = {
  name: string;
  logoUrl: string;
  backgroundUrl: string;
  isFavorite: boolean;
  gameUrl: string;
}

export const GAMES_CONFIG: GamesConfigItem[] = [
  {
    name: 'Call of Duty®',
    logoUrl: '/steam/games/cod_logo.png',
    backgroundUrl: '/steam/games/cod_bg.jpg',
    isFavorite: true,
    gameUrl: 'https://techno199.github.io/modern_warfare2019/'
  }
]