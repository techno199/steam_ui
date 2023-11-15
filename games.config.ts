export type GamesConfigItem = {
  name: string;
  logoUrl: string;
  backgroundUrl: string;
  isFavorite: boolean;
  gameUrl: string;
  playTime: number;
}

export const GAMES_CONFIG: GamesConfigItem[] = [
  {
    name: 'Call of Duty: Modern Warfare® (2019)',
    logoUrl: '/steam/games/cod_logo.png',
    backgroundUrl: '/steam/games/cod_bg.jpg',
    isFavorite: true,
    gameUrl: 'https://techno199.github.io/modern_warfare2019/',
    playTime: 633
  },
  {
    name: 'Battlefield V',
    logoUrl: '/steam/games/bf_logo.jpg',
    backgroundUrl: '/steam/games/bf_bg.jpg',
    isFavorite: true,
    gameUrl: 'https://techno199.github.io/bfv_markup/',
    playTime: 225.4
  },
  {
    name: 'Dota 2 Test Server',
    logoUrl: '/steam/games/dota_logo.jfif',
    backgroundUrl: '/steam/games/dota_bg.png',
    isFavorite: true,
    gameUrl: 'https://dota-ui.vercel.app/',
    playTime: 12289
  }
]